DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes;
USE recipes;

CREATE TABLE all_recipes (
    name varchar,
    ingredients varchar[],
    insructions varchar,
    difficulty INT DEFAULT 1
);

CREATE TABLE sorted_recipes (
    name varchar,
    ingredients varchar[],
    insructions varchar,
    difficulty INT DEFAULT 1
);

CREATE TABLE fav_recipes (
    name varchar,
    ingredients varchar[],
    insructions varchar,
    difficulty INT DEFAULT 1
);

CREATE INDEX player_scores_player_id on player_scores(player_id);
CREATE INDEX player_scores_score on player_scores(score);

INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Butter Chicken', ['Chicken','Rice','Yogurt','Spices'],'idk yet',2);
INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Plov', ['Beef','Rice','Carrots','Garlic'],'idk yet',3);
INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Mac & Chesse', ['Macaroni','Cheese'],'idk yet',1);
INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Pizza', ['Chicken','Rice','Yogurt','Spices'],'idk yet',2);
INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Cheeseburger', ['Beef','Cheese','Tomato','Lettuce','Onion','Bread'],'idk yet',3);
INSERT INTO all_recipes (name, ingredients, insructions, difficulty) VALUES ('Chicken & Rice', ['Chicken','Rice'],'idk yet',1);

