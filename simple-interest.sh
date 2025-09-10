#!/bin/bash

# Script to calculate Simple Interest

echo "Enter Principal Amount:"
read principal

echo "Enter Rate of Interest:"
read rate

echo "Enter Time (in years):"
read time

# Formula: (P * R * T) / 100
interest=$((principal * rate * time / 100))

echo "The Simple Interest is: $interest"
