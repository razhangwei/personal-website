import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
}

interface InteractiveDemoProps {
  title: string;
  description: string;
}

export default function InteractiveDemo({ title, description }: InteractiveDemoProps) {
  const [learningRate, setLearningRate] = useState<number>(0.01);
  const [iterations, setIterations] = useState<number>(100);
  const [noise, setNoise] = useState<number>(0.2);
  
  // Generate synthetic data based on parameters
  const generateData = (): DataPoint[] => {
    const data: DataPoint[] = [];
    const slope = 2 + Math.random() * 0.5;
    const intercept = 1 + Math.random() * 0.5;
    
    for (let i = 0; i < 20; i++) {
      const x = i / 2;
      const noiseAmount = (Math.random() - 0.5) * noise * 3;
      const y = slope * x + intercept + noiseAmount;
      data.push({ x, y });
    }
    
    return data;
  };
  
  // Simulate model training
  const trainModel = (data: DataPoint[]): { epoch: number; loss: number; prediction: DataPoint[] }[] => {
    const trainingResults = [];
    let weight = Math.random() * 2;
    let bias = Math.random() * 2;
    
    for (let epoch = 0; epoch <= iterations; epoch += 10) {
      let totalLoss = 0;
      
      // One iteration of training
      data.forEach(point => {
        // Predict
        const prediction = weight * point.x + bias;
        const error = point.y - prediction;
        totalLoss += error * error;
        
        // Update parameters
        if (epoch < iterations) {
          weight += learningRate * error * point.x / data.length;
          bias += learningRate * error / data.length;
        }
      });
      
      // Calculate average loss
      const avgLoss = totalLoss / data.length;
      
      // Generate predictions for visualization
      const predictions = data.map(point => ({
        x: point.x,
        y: weight * point.x + bias
      }));
      
      trainingResults.push({
        epoch,
        loss: avgLoss,
        prediction: predictions
      });
    }
    
    return trainingResults;
  };
  
  const data = generateData();
  const trainingResults = trainModel(data);
  const finalPredictions = trainingResults[trainingResults.length - 1].prediction;
  
  // Convert data to format needed for Recharts
  const chartData = data.map((point, index) => ({
    x: point.x,
    actual: point.y,
    predicted: finalPredictions[index].y
  }));
  
  // Prepare learning curve data
  const learningCurveData = trainingResults.map(result => ({
    epoch: result.epoch,
    loss: result.loss
  }));
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Learning Rate: {learningRate}
          </label>
          <input
            type="range"
            min="0.001"
            max="0.1"
            step="0.001"
            value={learningRate}
            onChange={(e) => setLearningRate(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Iterations: {iterations}
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Noise Level: {noise}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={noise}
            onChange={(e) => setNoise(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Linear Regression Model</h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'X', position: 'bottom' }} />
              <YAxis label={{ value: 'Y', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="scatter" dataKey="actual" stroke="#8884d8" name="Actual Data" dot={{ r: 5 }} isAnimationActive={false} />
              <Line type="line" dataKey="predicted" stroke="#82ca9d" name="Model Prediction" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Curve</h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={learningCurveData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" label={{ value: 'Epoch', position: 'bottom' }} />
              <YAxis label={{ value: 'Loss', angle: -90, position: 'left' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="loss" stroke="#ff7300" name="Training Loss" strokeWidth={2} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
        <p>Adjust the parameters and refresh to see how they affect the model's ability to fit the data.</p>
        <p>Higher learning rates can make training faster but may cause instability.</p>
        <p>More iterations usually lead to better fit, but can cause overfitting in some cases.</p>
        <p>The noise level simulates real-world data variance.</p>
      </div>
    </div>
  );
}
