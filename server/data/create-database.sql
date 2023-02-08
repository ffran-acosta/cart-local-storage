CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    price INT,
    stock INT,
    img VARCHAR(255)
)

INSERT INTO products (title, price, stock, img) VALUES ('Product 1', 100, 10, 'product.jpg')