package com.example.LogAndReg1.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="events")
public class Event {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String name;
	private LocalDate date;
	private String location;
	
	 @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name="event_id")
	    private Event event;
}
