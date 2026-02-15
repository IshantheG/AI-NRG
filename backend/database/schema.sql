CREATE TABLE IF NOT EXISTS ai_metrics (
    record_id INTEGER PRIMARY KEY
        DEFAULT nextval('ai_metrics_record_id_seq'),

    year INTEGER,
    quarter SMALLINT,

    model_type VARCHAR(100),
    task_type VARCHAR(100),

    model_size_million_params NUMERIC,
    training_framework VARCHAR(50),

    epochs INTEGER,
    batch_size INTEGER,
    learning_rate NUMERIC,

    training_time_hours NUMERIC,
    final_train_loss NUMERIC,
    final_val_loss NUMERIC,
    overfitting_score NUMERIC,

    inference_latency_ms NUMERIC,
    throughput_samples_per_sec NUMERIC,

    model_accuracy NUMERIC,
    f1_score NUMERIC,
    roc_auc NUMERIC,

    gpu_type VARCHAR(50),
    gpu_memory_gb NUMERIC,

    power_consumption_kwh NUMERIC,
    carbon_emission_kg NUMERIC,

    cloud_provider VARCHAR(50),
    training_cost_usd NUMERIC,
    inference_cost_per1k_requests NUMERIC,

    is_active BOOLEAN DEFAULT TRUE
);


