package com.example.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	@RequestMapping("/{anything}")
	public String helloDojo(@PathVariable("anything") String anything) {
		if(anything.equals("dojo")) {
			return "the "+ anything + " is awesome";
		}
		else if (anything.equals("burbank-dojo")) {
			return  "Burbank Dojo is located in Southern California";
		}
		else if(anything.equals( "san-jose")) {
			return "SJ dojo is the headquarters";
		}
		else {
			return "This path is not available";
		}
		
		
	}
	
	
	
}
