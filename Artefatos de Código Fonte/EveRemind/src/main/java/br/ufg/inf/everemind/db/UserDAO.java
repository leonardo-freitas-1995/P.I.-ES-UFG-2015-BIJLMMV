/*
 * The MIT License
 *
 * Copyright 2015 Igor.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package br.ufg.inf.everemind.db;

import br.ufg.inf.everemind.entity.User;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

/**
 *
 * @author Leonardo
 */
public class UserDAO {

    private static UserDAO instance = null;
    private final MongoDatabase mongoDatabase;
    private final MongoCollection<Document> collection;

    private UserDAO() {
        this.mongoDatabase = DatabaseConnection.create();
        this.collection = this.mongoDatabase.getCollection("users");
    }

    public static synchronized UserDAO getInstance() {
        if (instance == null) {
            instance = new UserDAO();
        }
        return instance;
    }

    public void save(User user) {
        if (!this.hasEmailRegistered(user.getEmail())) {
            Document userDB = new Document("name", user.getName())
                    .append("email", user.getEmail())
                    .append("emailVerified", false)
                    .append("hash", user.getHash());
            this.collection.insertOne(userDB);
        }
    }

    public boolean authenticate(String email, String hash) {
        Document query = new Document("email", email)
                .append("hash", hash);
        Document auth = collection.find(query).first();
        return auth != null;
    }

    public User getByEmail(String email) {
        Document query = new Document("email", email);
        Document search = collection.find(query).first();
        if (search == null) {
            return null;
        }

        User user = new User(search.getString("name"),
                search.getString("email"),
                search.getBoolean("emailVerified"));
        user.setId(search.getObjectId("_id").toString());

        return user;
    }

    public User getById(String id) {
        Document query = new Document("_id", new ObjectId(id));
        Document search = collection.find(query).first();
        if (search == null) {
            return null;
        }

        User user = new User(search.getString("name"),
                search.getString("email"),
                search.getBoolean("emailVerified"));
        user.setId(search.getObjectId("_id").toString());

        return user;
    }

    public void delete(String email) {
        Document query = new Document("email", email);
        collection.deleteOne(query);
    }

    public void updateInfo(String email, User user, boolean changedEmail) {
        Document query = new Document("email", email);
        Document userDB = new Document("name", user.getName()).append("email", user.getEmail());
        userDB.append("emailVerified", false);
        if (changedEmail) {
            userDB.append("emailVerified", false);
        }
        collection.updateOne(query, new Document("$set", userDB));
    }

    public void updateHash(String email, String hash) {
        Document query = new Document("email", email);
        Document hashDB = new Document("hash", hash);
        collection.updateOne(query, new Document("$set", hashDB));
    }

    public void setEmailVerified(String email) {
        Document query = new Document("email", email);
        Document emailVerifiedDB = new Document("emailVerified", true);
        collection.updateOne(query, new Document("$set", emailVerifiedDB));
    }

    public boolean hasEmailRegistered(String email) {
        Document query = new Document("email", email);
        Document search = collection.find(query).first();
        return search != null;
    }
}
