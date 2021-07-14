# ScriptCoin

A simple blockchain implementation written in JavaScript and Solidity - ScriptCoin 🔰

### Third Party Libraries

- crypto-js

```bash
npm i --save crypto-js
```

### Basic Structure

```bash
{
    "chain": [
        {
            "index": 0,
            "timestamp": "15/07/2020",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "31ece33bab4f04d0d09ba36f5532376eb5b1fc672ab3b66c25bdf8ef9ed1f134"
        },
        {
            "index": 1,
            "timestamp": "16/07/2021",
            "data": {
                "amount": 4
            },
            "previousHash": "31ece33bab4f04d0d09ba36f5532376eb5b1fc672ab3b66c25bdf8ef9ed1f134",
            "hash": "51a33093952f5bf102608956ab8b5b14b136e51c1d545058e910708ff4b98fd4"
        },
        {
            "index": 2,
            "timestamp": "17/07/2021",
            "data": {
                "amount": 10
            },
            "previousHash": "51a33093952f5bf102608956ab8b5b14b136e51c1d545058e910708ff4b98fd4",
            "hash": "a3991264ca7fd11c267144785ccb5bbf093e2664e6075ddbc84ece6b3ff12bc4"
        }
    ]
}

```

#### ToDo

- [ ] Implement Proof of Work

### Motivation

- To learn and implement the basics of Blockchain
- To write well structured code using modules and well commented code - best practices.

### References

- [How does Blockchain work?](https://www.youtube.com/watch?v=SSo_EIwHSd4)
- [How does Bitcoin work?](https://www.youtube.com/watch?v=bBC-nXj3Ng4)
