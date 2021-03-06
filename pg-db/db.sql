CREATE TABLE IF NOT EXISTS customers (
   id serial PRIMARY KEY,
   name VARCHAR ( 50 ) UNIQUE NOT NULL,
   address VARCHAR ( 50 ) NOT NULL,
   email VARCHAR ( 255 ) UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS category (
    id serial PRIMARY KEY,
    name VARCHAR ( 50 ) UNIQUE NOT NULL
);
INSERT INTO category(name) VALUES('sweatshirt');
INSERT INTO category(name) VALUES('shirt');
INSERT INTO category(name) VALUES('tee');
INSERT INTO category(name) VALUES('mug');
INSERT INTO category(name) VALUES('mask');
INSERT INTO customers(name, address, email) VALUES('snehi', '18639 liggett st Northridge, CA - 91324', 'snehi.pachchigar.813@my.csun.edu');
INSERT INTO customers(name, address, email) VALUES('rohan', 'California', 'rohan.gaikwad.109@my.csun.edu');
INSERT INTO customers(name, address, email) VALUES('Gabriella', 'California', 'gabriellajeane.deasis.167@my.csun.edu');
INSERT INTO customers(name, address, email) VALUES('Zhou', 'California', 'zhou.wu.735@my.csun.edu');
CREATE TABLE IF NOT EXISTS Color (
    id serial,
    name VARCHAR (25) UNIQUE,
    hexcode VARCHAR (50) NOT NULL UNIQUE,
    price INT
);
INSERT INTO Color(name, hexcode, price) VALUES('white', '#FFFFFF', 3);
INSERT INTO Color(name, hexcode, price) VALUES('black', '#000000', 3);
INSERT INTO Color(name, hexcode, price) VALUES('yellow', '#FFFF00', 2);
INSERT INTO Color(name, hexcode, price) VALUES('grey', '#A9A9A9', 3);
INSERT INTO Color(name, hexcode, price) VALUES('pink', '#FFC0CB', 5);
INSERT INTO Color(name, hexcode, price) VALUES('blue', '#87CEFA', 4);
CREATE TABLE IF NOT EXISTS BaseProducts (
   product_id serial,
   name VARCHAR ( 50 ) NOT NULL,
   category_id INT NOT NULL,
   price INT NOT NULL,
   color_id INT NOT NULL,
   created_on TIMESTAMP NOT NULL,
   PRIMARY KEY (product_id, category_id, color_id),
   FOREIGN KEY (category_id) REFERENCES category(category_id),
   FOREIGN KEY (color_id) REFERENCES Color(color_id)
);
ALTER TABLE BaseProducts ADD COLUMN images text[];
ALTER TABLE BaseProducts DROP COLUMN created_on CASCADE;
CREATE TABLE IF NOT EXISTS Fonts (
    font_id serial PRIMARY KEY,
    name VARCHAR (25) UNIQUE NOT NULL,
    price int
);
INSERT INTO Fonts(name, price) values('Calibiri', 2);
INSERT INTO Fonts(name, price) values('Roboto', 2);
INSERT INTO Fonts(name, price) values('Dancing Script', 3);
INSERT INTO Fonts(name, price) values('Pacifico', 3);
INSERT INTO Fonts(name, price) values('Comic Sans', 2);
INSERT INTO Fonts(name, price) values('Yellowtail', 3);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Crewneck Basic Sweatshirt',
    1,
    30,
    1
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Crewneck Basic Sweatshirt',
    1,
    30,
    2
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Cloth Mask',
    5,
    5,
    1
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Cloth Mask',
    5,
    5,
    2
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Cloth Mask',
    5,
    5,
    5
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Mug',
    4,
    5,
    1
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Crewnech Basic Sweatshirt',
    1,
    30,
    3
);

INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Crewnech Basic Sweatshirt',
    1,
    20,
    4
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Crewnech Basic Sweatshirt',
    1,
    20,
    6
);

INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Basic Shirt',
    2,
    10,
    1
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Basic Shirt',
    2,
    10,
    1
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Basic Shirt',
    2,
    10,
    2
);
INSERT INTO BaseProducts(name, category_id, price, color_id) VALUES(
    'Basic Shirt',
    2,
    10,
    6
);


UPDATE BaseProducts
SET image = (SELECT images[1] FROM BaseProducts where product_id=1)
where product_id=1;
ALTER TABLE BaseProducts 
DROP COLUMN images;
ALTER TABLE BaseProducts 
RENAME COLUMN images TO image;

ALTER TABLE BaseProducts
DROP CONSTRAINT baseproducts_pkey;

ALTER TABLE BaseProducts 
ADD PRIMARY KEY (product_id);


ALTER TABLE BaseProducts ADD PRIMARY KEY (product_id);
CREATE TABLE IF NOT EXISTS cart (
   cart_id serial,
   customer_id INT NOT NULL,
   product_id INT NOT NULL,
   font VARCHAR(25),
   quote VARCHAR(50),
   price INT NOT NULL,
   quantity INT NOT NULL,
   created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (cart_id),
   FOREIGN KEY (customer_id) REFERENCES customers(id),
   FOREIGN KEY (product_id) REFERENCES BaseProducts(product_id)
);
ALTER TABLE cart
ADD COLUMN ordered BOOLEAN DEFAULT false;

