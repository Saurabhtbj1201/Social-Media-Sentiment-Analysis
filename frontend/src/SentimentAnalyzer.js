import React, { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, Typography, TextField, Button, Box, Chip, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';

const SentimentAnalyzer = () => {
  const [UserInput, setUserInput] = useState('');
  const [Sentiment, setSentiment] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('/predictTweet', {
        text: UserInput,
      });
      setSentiment(response.data.sentiment);
    }
    catch (error) {
      console.error("Error: ", error);
    }
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === 'Positive') return 'success';
    if (sentiment === 'Negative') return 'error';
    return 'warning';
  };

  const getSentimentIcon = (sentiment) => {
    if (sentiment === 'Positive') return <SentimentSatisfiedAltIcon />;
    if (sentiment === 'Negative') return <SentimentVeryDissatisfiedIcon />;
    return <SentimentNeutralIcon />;
  };

  return (
    <Fade in={true} timeout={800}>
      <Card elevation={6}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ mb: 3 }}>
            Twitter Sentiment Analysis
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            Analyze the emotional tone of tweets using our advanced Logistic Regression model.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Tweet Text"
              variant="outlined"
              value={UserInput}
              onChange={handleInputChange}
              placeholder="Enter a tweet to analyze..."
              helperText="Type or paste the text content of a tweet"
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={analyzeSentiment}
              sx={{ mt: 3, py: 1.5 }}
              endIcon={<SendIcon />}
              disabled={!UserInput.trim()}
            >
              Analyze Sentiment
            </Button>
          </Box>

          {Sentiment && (
            <Fade in={true}>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Chip
                  icon={getSentimentIcon(Sentiment)}
                  label={`Prediction: ${Sentiment}`}
                  color={getSentimentColor(Sentiment)}
                  variant="filled"
                  sx={{ fontSize: '1.2rem', py: 3, px: 2, borderRadius: 2 }}
                />
              </Box>
            </Fade>
          )}
        </CardContent>
      </Card>
    </Fade>
  )
};

export default SentimentAnalyzer