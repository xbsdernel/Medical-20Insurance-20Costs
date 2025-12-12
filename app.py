import streamlit as st
import numpy as np
import pickle

# Load model
weights = pickle.load(open("linear_model_weights.pkl", "rb"))
feature_names = pickle.load(open("linear_model_features.pkl", "rb"))

st.title("Medical Cost Prediction")
st.write("Enter patient details:")

user_input = []
for feature in feature_names:
    value = st.number_input(feature, value=0.0)
    user_input.append(value)

X_new = np.array(user_input).reshape(1, -1)
X_new_bias = np.hstack([np.ones((X_new.shape[0], 1)), X_new])
pred = X_new_bias.dot(weights)[0]

st.subheader("Predicted Annual Medical Cost:")
st.write(f"${pred:,.2f}")
