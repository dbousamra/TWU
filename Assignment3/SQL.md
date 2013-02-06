#Biblioteca Database answers:

##Who checked out the book ‘The Hobbit’?

####Answer:  
```
Anand Beck
``` 

####Query:  

```sql
SELECT name
FROM member INNER JOIN checkout_item, book
  ON checkout_item.book_id = book.id AND checkout_item.member_id = member.id
WHERE book.title LIKE "The Hobbit";
```  

##How many people have not checked out anything? 

####Answer:
```
37
```

####Query:
```sql
SELECT COUNT(*)
FROM member
WHERE member.id NOT IN
     (SELECT member_id 
      FROM checkout_item);
```



##What books and movies aren’t checked out?

####Answer:
```
1984
Catcher in the Rye
Crouching Tiger, Hidden Dragon
Domain Driven Design
Fellowship of the Ring
Lawrence of Arabia
Office Space
Thin Red Line
To Kill a Mockingbird
Tom Sawyer
```

####Query:
```sql
SELECT title FROM book 
WHERE book.id NOT IN 
     (SELECT book_id 
      FROM checkout_item 
      WHERE book_id IS NOT NULL)
UNION
SELECT title FROM movie
WHERE movie.id NOT IN 
     (SELECT movie_id 
      FROM checkout_item 
      WHERE movie_id IS NOT NULL);
```


##Add the book 'The Pragmatic Programmer'

####Query:
```sql
INSERT INTO book (title)
VALUES ('Pragmatic Programmer');
```

##And add yourself as a member. 

####Query:
```sql
INSERT INTO member (name)
VALUES ('Dominic Bou-Samra');
```

##Check out 'The Pragmatic Programmer'. 

####Query:
```sql
INSERT INTO checkout_item (member_id, book_id)
VALUES(
  (SELECT id from member where name  = 'Dominic Bou-Samra'), 
	(SELECT id from book  where title = 'Pragmatic Programmer')	
)
```

##Use your query from question 1 to verify that you have checked it out. 

####Answer:
```
Dominic Bou-Samra
```

####Query:
```sql
SELECT name
FROM member INNER JOIN checkout_item, book
  ON checkout_item.book_id = book.id AND checkout_item.member_id = member.id
WHERE book.title LIKE "Pragmatic Programmer";
```

##Who has checked out more that 1 item? 

####Answer:
```
Dominic Bou-Samra
```

####Query:
```sql
SELECT name
FROM member INNER JOIN checkout_item, book
  ON checkout_item.book_id = book.id AND checkout_item.member_id = member.id
WHERE book.title LIKE "Pragmatic Programmer";
```

