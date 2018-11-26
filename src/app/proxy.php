<?php

header('Access-Control-Allow-Origin: *');

//Get event ID you want to request:
$eventID = isset($_GET['query']) ? $_GET['query'] : FALSE;

//Exit if no query provided:
if (!$query) {
    exit('No query Provided.');
}

//new york Times API:
$token = '&api-key=1a5ee5890b53485181de2e0448629dc4';

//Set url, %s will be replaced later:
$url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=';

//Set url, pass in params:
$request_uri = sprintf($url, $query, $token);

//Try to fetch:
$response = file_get_contents($request_uri);

//Set content-type to application/json for the client to expect a JSON response:
header('Content-type: application/json');

//Output the response and kill the script:
//exit($response);
exit('ciao');