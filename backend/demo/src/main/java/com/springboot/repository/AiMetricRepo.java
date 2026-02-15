package com.springboot.repository;

import com.springboot.model.AiMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface AiMetricRepo extends JpaRepository<AiMetric, Long> {

     @Query("""
        SELECT m.year, AVG(m.carbonEmissionKg)
        FROM AiMetric m
        WHERE m.isActive = true
        GROUP BY m.year
        ORDER BY m.year
    """)
    List<Object[]> avgEmissionsByYear();
}
