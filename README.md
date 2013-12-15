#Py-Souch


Simple client to handle CouchDB database form python :D

It's the brother of souch for Node.js :D [github](https://github.com/iosamuel/souch) [npm](https://npmjs.org/package/souch)

#Install

Souch Is available in PyPi so to install you can do this in Linux and MAC:
	
	pip install Souch

for windows you can intall [PIP](http://www.lfd.uci.edu/~gohlke/pythonlibs/#pip) and [SetupTools](http://www.lfd.uci.edu/~gohlke/pythonlibs/#setuptools):

	1.- First download and install SetupTools 
	2.- Install Pip 

or download it with easy_install:
	
	easy_install Souch



#How to use

	from souch.souch import Souch
	options = {}
	options['host'] = "host" #Optional, Default is localhost
	options['port'] = port #Optional, Default is 5984
	options['username'] = "username" #Optional
	options['password'] = "password" #Optional
	souch = Souch('mydb', options, create=False) # The database can't be an empty string

	#Create by default is False, if the database does not exists and create is False Souch will throw an exception
	if the database exists and create is False nothing will happen, but if the database exists and create is True nothing will happen, but if the database does not exist and create is True this will be created, If you admin party is on, you do not have to pass username and password to the options dict otherwise you will have to add them.

	#If you do not want to use another host, port a username and a password only pass an empty dict
	# souch = Souch('mydb', {})

	* Host and por are to comunicate Souch with CouchDB if you have the database in another host you
		have to pass the host and port.
	* Username and password are for authenticate with the CouchDB  database that has restricted permissions, if you don't pass them that means the database is free.


##Create Database:

	from souch.souch import Souch

	options = {
		'username' :'username',
		'password': 'password'
	}

	conn = utils('db_doesnot_exist', options, create=True)

Souch counts with the four principal HTPP VERBS:
	
	* GET
	* POST
	* PUT
	* DELETE
	
Souch recommends the use of a type field for every document in your database, so to use docs with Souch,
you will have to pase a type field to identify the docs, the which you can build on a dict or use the default 'type'.

For Example

	{
    	'_id': 'orangeId'
    	'name': 'orange',
    	'price': {'Mexico': 19, 'USA':12},
    	'type': 'product'
	}

	{
	    '_id': 'mangosId'
	    'name': 'mango',
	    'price': {'Mexico': 10, 'USA':1},
	    'type': 'product'
	}

	{
	    '_id': 'VictorId'
	    'name': 'Victor',
	    'age': 15,
	    'password': 'somepassinsha1'
	    '_type': 'user'
	}

	{
	    '_id': 'SamuelId'
	    'name': 'Samuel',
	    'age': 17,
	    'password': 'someotherpassinsha1'
	    '_type': 'user'
	}

Example of a connection with credentials to a restricted database, one is using the default value "type" and other is with it's custome "type":

	from souch.souch import Souch
	
	options = {'username':'username', 'password':'password'}
	
	souch = Souch('mydb', options)
	
	products = souch.newDoc('product') #Here we use the default type key "type" and we set it a value "product"
	users = souch.newDoc({'_type':'user'}) #Here we set the key "_type" and the value "user"

To Continue the 4 HTTP VERBS with Souch:

#GET

*****The callback can be a lambda or a function

To continue an example

	def callback(parameter):
		print "I'm the result of the callback", parameter

	products.get('mangoId', callback) #Here is an example with a defined function as callback, note you have to pass the function without parameters, also you can assign it to a variable to store the data that the results return

Now another one with a lambda as callback
	
	myresults = products.get('mangoId', lambda parameter: "I'm the result of the callback" + str(parameter)) #Here is an example with a lambda as callback, note the results that the callback provides you is a dict with all the data, you have to assign this get to a variable to store the results in a variable
	print myresults

Note if you do this:

	myresults = products.get('mangoId', lambda parameter: "I'm the result of the callback" + str(parameter)) 

Or this
	
	myresults = products.get('mangoId', callback) 

this means that `myresults` now it's going to store the data that is passed as a parameter to the callback not the result of the callback, to store the result of the callback you have to do something like:
	
	calbres= 
	myresults = products.get('mangoId', lambda parameter: calbres += parameter) 

Now calbres it's going to be equal to the parameter that is passed to the callback.


#POST

The first parameter that POST takes is the data this must be a dict to POST and the second one the callback:

	def callback(parameter):
		print "I'm the result of the callback", parameter

	data_to_ post = {
		'_id': "appleId",
		'name': 'apple',
		'price': {'Mexico':10, 'USA':3}
	}# The id is optional, CouchDB Creates one when you POST data, you don't have to pass _rev in the data to send
	because that will throw an Exception, you don't have to worry about 'type' field, this will be added automatically for Souch
	
	products.post(data_to_post, callback) #The result is the JSON Object that CouchDB returns with fields like `ok` , `error`

#PUT

The first parameter that PUT takes is the ID where the data will be updated, the second one is the Data, the third one is "ins" (insert) that is a boolean field the default value is False, if you change it to True that means you want to insert like a POST, and the last one the callback.


		def callback(parameter):
			print "I'm the result of the callback", parameter

		to_put = {
    	'name': 'apple',
    	'price': {'Mexico':10, 'USA':9}
		} //  as CouchDB says "If you want to change a document in CouchDB, you don’t tell it to go and find a field in a specific document and insert a new value. Instead, you load the full document out of CouchDB, make your changes in the JSON structure (or object, when you are doing actual programming), and save the entire new revision (or version) of that document back into CouchDB. Each revision is identified by a new _rev value.
		If you want to update or delete a document, CouchDB expects you to include the _rev field of the revision you wish to change. When CouchDB accepts the change, it will generate a new revision number."
		So you are going to send all the new and the old data of the JSON to PUT on the CouchDB database, That will be fixed in the next versions.

		products.put('appleId', to_put, False, callback) #The result is the JSON Object that CouchDB returns with fields like `ok` , `error`


		#Or with insert

		products.put('mynewID', to_put, True, callback) #The result is the JSON Object that CouchDB returns with fields like `ok` , `error`


#DELETE

The first parameter that DELETE takes is the id and the second one the callback
		
		def callback(parameter):
				print "I'm the result of the callback", parameter
		

		products.delete('appleId', callback)#The result is the JSON Object that CouchDB returns with fields like `ok` , `error`


#Design Docs

Souch also has support to call design docs from the DB, Souch supports different types of design docs like:

	*Map/Reduce
	*View
	*Show etc.

The parameters that design takes are:

	Souch.design('design_name', options_design_dict, callback)

Here an example of a map view : /database/_design/products/_view/all?descending=true&startkey="Something"&endkye="Something"

	from souch.souch import Souch

	conn = Souch('database',{})

	options  = {
		'type': 'view', #Can be map/reduce, show etc.
		'name' 'all', #Name of the map view in this case is `all`
		'params': {
			'descending': True,
			'starkey': "Something",
			'endkey':  "Something"
			} #Params must be a dict with paramas like startkey, endkey, descending etc.
	}

	design = conn.design('products', options, callback)







#Author

Victor M. Castillo - @VerurteiltKind

#Do you want to be an contributor?

Send  an email to mini.guero@hotmail.com and Tell me why you want to be a contributor :D

Thank you :D

#Do you want to see something new in Souch? 

Also send an email to mini.guero@hotmail.com and Tell me what :D