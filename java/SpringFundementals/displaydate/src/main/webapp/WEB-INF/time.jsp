<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/time.css">
        <script type="text/javascript" src="js/asd.js"></script>
</head>
<body>
	<section>
		<h1>I am at time page</h1>
		<h1>Time:<c:out value="${time}"/></h1>
	</section>
	
	
</body>
</html>