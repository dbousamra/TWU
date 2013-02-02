Biblioteca Database answers:
============================

1. **Who checked out the book ‘The Hobbit’?**

Answer: 
```sql
Anand Beck
```
Query:
```sql
SELECT name
FROM member INNER JOIN checkout_item, book
  ON checkout_item.book_id = book.id AND checkout_item.member_id = member.id
WHERE book.title LIKE "The Hobbit";
```
