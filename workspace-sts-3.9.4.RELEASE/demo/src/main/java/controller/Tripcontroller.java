package controller;


	import java.util.Hashtable;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import model.Trip;

	import service.Tripservice;

	@RestController
	@RequestMapping("/trips")
	public class Tripcontroller {

		@Autowired
		Tripservice ps;

		@RequestMapping("/all")
		public Hashtable<String, Trip> getAll() {
			return ps.getAll();
		}

		@RequestMapping("{id}")
		public Trip getTrip(@PathVariable("id") String id) {
			return ps.getTrip(id);
		}
	}


