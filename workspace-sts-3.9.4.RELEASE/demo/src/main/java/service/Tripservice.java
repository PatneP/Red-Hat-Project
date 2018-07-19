package service;


	import java.util.Hashtable;

	import org.springframework.stereotype.Service;

	import model.Trip;

	@Service
	public class Tripservice {
		Hashtable<String, Trip> trips = new Hashtable<String, Trip>();
		public Tripservice() {
			Trip p = new Trip();
			p.setId("1");
			p.setOwner("Patne");
			p.setFrom("Pune");
			p.setVia("Satara");
			p.setTo("Kolhapur");
			p.setTime("4.00 pm");
			trips.put("1", p);
			
			p = new Trip();
			p.setId("2");
			p.setOwner("Pranali");
			p.setFrom("Pune");
			p.setVia("alibaug");
			p.setTo("Murud");
			p.setTime("10.00 am");
			trips.put("2", p);
		}
		public Trip getTrip(String id) {
			if (trips.containsKey(id))
				return trips.get(id);
			else
				return null;
		}
		public Hashtable<String, Trip> getAll() {
			return trips;
		}
	}

