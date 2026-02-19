import React, { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, Typography, TextField, Button, Box, Chip, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const AmazonSentimentAnalyzer = () => {
  const [UserInput, setUserInput] = useState('');
  const [Sentiment, setSentiment] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('/predictAmazon', {
        review: UserInput,
      });
      setSentiment(response.data.sentiment);
    }
    catch (error) {
      console.error("Error: ", error);
    }
  };

  const getSentimentIcon = (sentiment) => {
    if (sentiment === 'Positive') return <ThumbUpIcon />;
    if (sentiment === 'Negative') return <ThumbDownIcon />;
    return <ShoppingCartIcon />;
  };

  return (
    <Fade in={true} timeout={800}>
      <Card elevation={6}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <ShoppingCartIcon sx={{ color: '#ff9900', fontSize: 40, mr: 2 }} />
            <Typography variant="h4" align="center" color="text.primary">
              Amazon Review Analysis
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
            Determine customer satisfaction from product reviews using our specialized classification model.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Product Review"
              variant="outlined"
              value={UserInput}
              onChange={handleInputChange}
              placeholder="Paste an Amazon product review here..."
              helperText="Enter the full text of a customer review"
            />
            <Button
              fullWidth
              variant="contained"
              color="warning"
              size="large"
              onClick={analyzeSentiment}
              sx={{ mt: 3, py: 1.5, color: 'white' }}
              endIcon={<SendIcon />}
              disabled={!UserInput.trim()}
            >
              Analyze Review
            </Button>
          </Box>

          {Sentiment && (
            <Fade in={true}>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Chip
                  icon={getSentimentIcon(Sentiment)}
                  label={`Verdict: ${Sentiment}`}
                  color={Sentiment === 'Positive' ? 'success' : 'error'}
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

export default AmazonSentimentAnalyzer