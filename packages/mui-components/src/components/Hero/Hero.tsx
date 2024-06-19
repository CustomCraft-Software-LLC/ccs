import React from 'react';
import { 
  Grid,
  Box,  
  useMediaQuery,
  useTheme 
} from '@mui/material';
import HeroDesktop from './HeroDesktop.jsx';
import HeroMobile from './HeroMobile.jsx';

interface HeroProps { 
    heading: string;
    subheading: string;
    image: string;
    alt?: string;
}

const HeroSection: React.FC<HeroProps> = ({ heading, subheading, image="https://via.placeholder.com/200", alt="image" }) => {
	const words = heading.split(' ');
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box
			sx={{ 
				background: theme.palette.background.default,
			}}
		>
			<Grid container>
				<Grid item md={0} xs={1}></Grid>
				<Grid item md={12} xs={10}>
					{isMobile ? ( 
						<HeroMobile heading={words} subheading={subheading} image={image} alt={alt} /> 
					) : (  
						<HeroDesktop heading={words} subheading={subheading} image={image} alt={alt} />
					)}
				</Grid>
				<Grid item md={0} xs={1}></Grid>
			</Grid>
		</Box>
	);
}

export default HeroSection;