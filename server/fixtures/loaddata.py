import json
import pymongo
from pymongo import Connection

def loadAccounts(file, db_name):
    with open(file) as json_data:
        data = json.load(json_data)
        
    
    connection = Connection()
    connection = Connection('localhost', 27017)
    db = connection.testdb
    collection = db.db_name

    # We need to put the data in database 
    # loop throught the rows in the data json file
    # create a new Account
    # post it to the db
    # do it for all of them
    for post in collection.find():
        print post


loadAccounts("initialAccountSetup.json", "Accounts" )
