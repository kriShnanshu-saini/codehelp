import React from 'react';
// import { HeroParallax } from "@/components/ui/hero-parallax";
import { databases } from '@/models/server/config';
import { db, questionAttachmentBucket, questionCollection } from '@/models/name';
import { Query } from 'node-appwrite';
import slugify from '@/utils/slugify';
import { storage } from '@/models/client/config';
import HeroSectionHeader from './HeroSectionHeader';

export default async function HeroSection() {
	//     const questions = await databases.listDocuments(db, questionCollection, [
	//         Query.orderDesc("$createdAt"),
	//         Query.limit(15),
	//     ]);

	return (
		<HeroSectionHeader />
		// <HeroParallax
		//     header={<HeroSectionHeader />}
		// />
	);
}