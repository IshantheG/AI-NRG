package com.springboot;


import com.springboot.repository.AiMetricRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.List;



@SpringBootTest
public class ApplicationTests {

    @Autowired
    private AiMetricRepo repo;

    @Test
    void testAvgEmissionsByYear() {
        

    
        List<Object[]> results = repo.avgEmissionsByYear();

        

        // Step 4: Print results for visual verification
        for (Object[] row : results) {
            Integer year = (Integer) row[0];
            Number avgCarbonNum = (Number) row[1];
            BigDecimal avgCarbon = BigDecimal.valueOf(avgCarbonNum.doubleValue());
            System.out.println("Year: " + year + ", Avg CO2 Emissions: " + avgCarbon);
        }
    }
}