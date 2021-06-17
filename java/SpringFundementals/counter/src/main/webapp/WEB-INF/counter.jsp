<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/counter.css">
<script type="text/javascript" src="js/counter.js"></script>
</head>
<body>
<h1>you have visited<a href="#">http://your_server</a><c:out value="${count}"/> </h1>
<a href="/">Test another visit ?</a>
<a href="/reset"><button>clear session</button></a>

</body>
</html>