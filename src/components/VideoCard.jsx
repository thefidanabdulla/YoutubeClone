import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React from 'react';

import { 
    demoThumbnailUrl, 
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle  
} from '../utils/constants';

const VideoCard = ({ video: {id: { videoId }, snippet} }) => {
  return (
    <Card>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                sx={{ width: 358, height: 180 }}
                alt={snippet?.title}
            />
        </Link>
    </Card>
  )
}

export default VideoCard