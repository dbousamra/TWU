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
     FROM checkout_item)
```



##What books and movies aren’t checked out?


##Add the book 'The Pragmatic Programmer', and add yourself as a member. Check out 'The Pragmatic Programmer'. Use your query from question 1 to verify that you have checked it out. 

##Who has checked out more that 1 item? 