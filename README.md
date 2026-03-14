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

Two quality attributes considered in this design are Availability and Deployability.

Availability is supported by the use of a simple request–response mechanism in the Sampler API. The Sampler continuously listens for incoming sensor data through the POST /sample endpoint, allowing the system to keep operating and processing sensor inputs.

Deployability is supported through CI/CD automation using GitHub Actions. The pipeline automatically builds the project and runs unit tests whenever changes are pushed to the repository. This appears in the GitHub Actions workflow configuration.
