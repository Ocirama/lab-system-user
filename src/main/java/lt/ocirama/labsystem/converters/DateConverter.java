package lt.ocirama.labsystem.converters;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Random;
import java.util.TimeZone;

public class DateConverter {

    public static java.util.Date dateInput(String date) {

        System.out.println(">>>>> Įveskite padėklo registravimo datą yyyyMMdd <<<<<");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");

        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        java.util.Date theDate = null;
        try {
            theDate = sdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return theDate;
    }
    public static Double getRandomNumberInRange(double min, double max) {

        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return min + r.nextDouble() * max;
    }
}
