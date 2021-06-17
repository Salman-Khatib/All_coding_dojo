package com.codingdojo.display;

import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
@Controller
@SpringBootApplication
public class DisplaydateApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisplaydateApplication.class, args);
	}
	


	@RequestMapping(" ")
		public String home() {
			return "index.jsp";
	}
	@RequestMapping("/time")
		public String time(Model model) {
		LocalDateTime myDate1= LocalDateTime.now();
		 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("HH:mm a");
		 String formattedDate = myDate1.format(myFormatObj);
		 model.addAttribute("time", formattedDate);
			
			return "time.jsp";
		}
	@RequestMapping("/date")
	public String date(Model model) {
		
		LocalDateTime myDate= LocalDateTime.now();
		 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("EEEE,dd-MM-yyyy");
		 String formattedDate = myDate.format(myFormatObj);
		 model.addAttribute("date", formattedDate);
		
		return "date.jsp";
	}
	
	
	
	
	
	
	
	
	
}






