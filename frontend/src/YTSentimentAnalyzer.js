import React, { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, Typography, TextField, Button, Box, Chip, Grid, Paper, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import YouTubeIcon from '@mui/icons-material/YouTube';

const YTSentimentAnalyzer = () => {
    const [input, setInput] = useState('')
    const [sentiment, setSentiment] = useState('')
    const [vader, setVader] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    };

    const analyze = async () => {
        try {
            const response = await axios.post('/predictYT', {
                comment: input,
            });
            console.log(response.data)
            setSentiment(response.data.sentiment)
            setVader(response.data.vader_score)
        }
        catch (error) {
            console.error("Error: ", error)
        }
    }

    const getScoreColor = (value) => {
        if (value > 0.05) return 'success.main';
        if (value < -0.05) return 'error.main';
        return 'warning.main';
    };

    return (
        <Fade in={true} timeout={800}>
            <Card elevation={6}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                        <YouTubeIcon sx={{ color: '#FF0000', fontSize: 40, mr: 2 }} />
                        <Typography variant="h4" align="center" color="text.primary">
                            YouTube Sentiment Analysis
                        </Typography>
                    </Box>

                    <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
                        Evaluate viewer comments using VADER (Valence Aware Dictionary and sEntiment Reasoner).
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="YouTube Comment"
                            variant="outlined"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Paste a YouTube comment here..."
                            helperText="Analyze comment sentiment and VADER metrics"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="error"
                            size="large"
                            onClick={analyze}
                            sx={{ mt: 3, py: 1.5 }}
                            endIcon={<SendIcon />}
                            disabled={!input.trim()}
                        >
                            Analyze Comment
                        </Button>
                    </Box>

                    {sentiment && (
                        <Fade in={true}>
                            <Box sx={{ mt: 4 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                                    <Chip
                                        label={`Overall Sentiment: ${sentiment}`}
                                        color={sentiment === 'Positive' ? 'success' : sentiment === 'Negative' ? 'error' : 'warning'}
                                        sx={{ fontSize: '1.2rem', py: 3, px: 2, borderRadius: 2 }}
                                    />
                                </Box>

                                {vader && (
                                    <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 4 }}>
                                        <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
                                            Detailed VADER Metrics
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={3}>
                                                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.05)' }}>
                                                    <Typography variant="subtitle2" color="text.secondary">Compound</Typography>
                                                    <Typography variant="h5" sx={{ color: getScoreColor(vader.compound), fontWeight: 'bold' }}>
                                                        {vader.compound}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.05)' }}>
                                                    <Typography variant="subtitle2" color="text.secondary">Positive</Typography>
                                                    <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>
                                                        {vader.pos}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.05)' }}>
                                                    <Typography variant="subtitle2" color="text.secondary">Neutral</Typography>
                                                    <Typography variant="h5" color="warning.main" sx={{ fontWeight: 'bold' }}>
                                                        {vader.neu}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.05)' }}>
                                                    <Typography variant="subtitle2" color="text.secondary">Negative</Typography>
                                                    <Typography variant="h5" color="error.main" sx={{ fontWeight: 'bold' }}>
                                                        {vader.neg}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                            </Box>
                        </Fade>
                    )}
                </CardContent>
            </Card>
        </Fade>
    )
}

export default YTSentimentAnalyzer