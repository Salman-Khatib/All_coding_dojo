package com.example.counter;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class CounterApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(CounterApplication.class, args);
	}
	@RequestMapping("")
	public String server(HttpSession session) {
		if (session.isNew()) {
			session.setAttribute("count",0);
			return "server.jsp";
		}else {
			Integer count = (Integer) session.getAttribute("count");
			count ++;
			session.setAttribute("count",count);
		}
		
		return "server.jsp";
	}
	@RequestMapping("/counter")
	public String counter() {
		
	
		return "counter.jsp";
	}
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		session.setAttribute("count",0);
		return "redirect:/counter";
	}
	

}
