package com.springboot.controller;
import com.springboot.repository.AiMetricRepo;

import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping("/metrics")
public class MetricsController {

    private final AiMetricRepo repository;

    public MetricsController(AiMetricRepo repository) {
        this.repository = repository;
    }

    @GetMapping("/count")
    public long count() {
        return repository.count();
    }
}
