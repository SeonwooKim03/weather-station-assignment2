# Sampler API Design

## Endpoint
POST /sample

## Input JSON example
```json
{
  "sensor_id": "sensor1",
  "voltage": 3.27,
  "timestamp": "2026-03-12T12:00:00Z"
}
```

## Output JSON example
```json
{
  "status": "received",
  "message": "Sample stored successfully"
}
```

## Design Explanation
The Sampler receives sensor voltage data through a POST request.
It accepts JSON input and returns a JSON response.
This design allows the Sensor module to send voltage data to the Sampler in the weather station pipeline.

## QA Support
The system supports Availability by detecting sensor data and continuing operation.
Deployability is supported through CI/CD automation using GitHub Actions.
