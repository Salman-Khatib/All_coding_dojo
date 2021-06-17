<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<form method="POST" action="/code">
	<h2 class="error"><c:out value="${error}"/></h2>
	<h1>Write your Code</h1>
    <input type="text" name="code">
    <button>Try your Code</button>
</form>

</body>
</html>