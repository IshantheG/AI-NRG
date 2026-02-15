package com.springboot.model;


import java.math.BigDecimal;

import jakarta.persistence.*;

@Entity
@Table(name = "ai_metrics")
public class AiMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer recordId;

    @Column(name = "year")
    private Integer year;

    @Column(name = "quarter")
    private Short quarter;

    @Column(name = "model_type")
    private String modelType;

    @Column(name = "task_type")
    private String taskType;

    @Column(name = "model_size_million_params")
    private BigDecimal modelSizeMillionParams;

    @Column(name = "training_framework")
    private String trainingFramework;

    @Column(name = "epochs")
    private Integer epochs;

    @Column(name = "batch_size")
    private Integer batchSize;

    @Column(name = "learning_rate")
    private BigDecimal learningRate;

    @Column(name = "training_time_hours")
    private BigDecimal trainingTimeHours;

    @Column(name = "final_train_loss")
    private BigDecimal finalTrainLoss;

    @Column(name = "final_val_loss")
    private BigDecimal finalValLoss;

    @Column(name = "overfitting_score")
    private BigDecimal overfittingScore;

    @Column(name = "inference_latency_ms")
    private BigDecimal inferenceLatencyMs;

    @Column(name = "throughput_samples_per_sec")
    private BigDecimal throughputSamplesPerSec;

    @Column(name = "model_accuracy")
    private BigDecimal modelAccuracy;

    @Column(name = "f1_score")
    private BigDecimal f1Score;

    @Column(name = "roc_auc")
    private BigDecimal rocAuc;

    @Column(name = "gpu_type")
    private String gpuType;

    @Column(name = "gpu_memory_gb")
    private BigDecimal gpuMemoryGb;

    @Column(name = "power_consumption_kwh")
    private BigDecimal powerConsumptionKwh;

    @Column(name = "carbon_emission_kg")
    private BigDecimal carbonEmissionKg;

    @Column(name = "cloud_provider")
    private String cloudProvider;

    @Column(name = "training_cost_usd")
    private BigDecimal trainingCostUsd;

    @Column(name = "inference_cost_per1k_requests")
    private BigDecimal inferenceCostPer1kRequests;

    @Column(name = "is_active")
    private Boolean isActive = true;
    
}
