from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Create FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input model
class InvestigationRequest(BaseModel):
    deviation: str

# Home route
@app.get("/")
def home():
    return {"message": "Pharma Investigation AI Backend Running"}

# AI report generation route
@app.post("/generate-investigation")
def generate_investigation(data: InvestigationRequest):

    prompt = f"""
    You are an expert pharmaceutical QA investigator.

    Generate a professional pharmaceutical investigation report.

    Deviation:
    {data.deviation}

    Include:
    1. Problem Statement
    2. Root Cause Analysis
    3. Impact Assessment
    4. Corrective Action
    5. Preventive Action
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": "You are a pharmaceutical QA expert."},
            {"role": "user", "content": prompt}
        ]
    )

    report = response.choices[0].message.content

    return {"report": report}