import streamlit as st
import numpy as np
import pickle

# -------------------------------
# Load model artifacts
# -------------------------------
with open("linear_model_weights.pkl", "rb") as f:
    weights = pickle.load(f)

with open("linear_model_features.pkl", "rb") as f:
    feature_names = pickle.load(f)

# -------------------------------
# App UI
# -------------------------------
st.title("💊 Medical Insurance Cost Prediction")
st.write("Enter patient information to predict annual medical cost")

# -------------------------------
# User Inputs
# -------------------------------
age = st.number_input("Age", min_value=0, max_value=120, value=30)
bmi = st.number_input("BMI", min_value=10.0, max_value=60.0, value=25.0)
children = st.number_input("Number of Children", min_value=0, max_value=10, value=0)

sex = st.selectbox("Sex", ["male", "female"])
smoker = st.selectbox("Smoker", ["yes", "no"])
region = st.selectbox(
    "Region",
    ["northeast", "northwest", "southeast", "southwest"]
)

# -------------------------------
# Encode inputs (MATCH TRAINING)
# -------------------------------
sex_male = 1 if sex == "male" else 0
sex_female = 1 if sex == "female" else 0

smoker_yes = 1 if smoker == "yes" else 0
smoker_no = 1 if smoker == "no" else 0

region_northeast = 1 if region == "northeast" else 0
region_northwest = 1 if region == "northwest" else 0
region_southeast = 1 if region == "southeast" else 0
region_southwest = 1 if region == "southwest" else 0

# -------------------------------
# Build feature vector (ORDER MATTERS)
# -------------------------------
X = np.array([
    age,
    bmi,
    children,
    sex_male,
    sex_female,
    smoker_yes,
    smoker_no,
    region_northeast,
    region_northwest,
    region_southeast,
    region_southwest
]).reshape(1, -1)

# Add bias term
X_bias = np.hstack([np.ones((X.shape[0], 1)), X])

# -------------------------------
# Prediction
# -------------------------------
if st.button("Predict Cost"):
    prediction = X_bias.dot(weights)[0]

    st.subheader("💰 Predicted Annual Medical Cost")
    st.success(f"${prediction:,.2f}")
