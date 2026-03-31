export const profile = {
  name: 'Aditya Girish',
  headline:
    "Computer Science (PES University '26) | Machine Learning, LLMs, RAG, and GCP",
  location: 'Bengaluru, India',
  summary:
    'Machine learning engineer with experience in LLMs, RAG systems, deep learning, and production Google Cloud deployments.',
  links: {
    github: 'https://github.com/adityagirishh',
    linkedin: 'https://www.linkedin.com/in/adityagirishh/',
    resume: '/resume.pdf',
    medium: 'https://medium.com/@adityadeepa634'
  }
}

export const experience = [
  {
    role: 'Software Engineer Intern – AI',
    company: 'TruEstate',
    period: 'Jan 2026 – Present',
    location: 'Bengaluru, India',
    bullets: [
      'Developed a hybrid RAG + agentic system on Vertex AI and Cloud Run, reducing customer acquisition costs by 40% and manual effort by 45%.',
      'Deployed real-time Pub/Sub to BigQuery ML data pipelines that increased customer engagement by 35%.',
      'Architected a scalable multi-tenant GCP infrastructure for full customer lifecycle automation.'
    ]
  },
  {
    role: 'Strategic AI & GCP Consulting Engineer',
    company: 'Viable Ideas Private Limited',
    period: 'Jul 2025 – Jan 2026',
    location: 'Bengaluru, India',
    bullets: [
      'Advised leadership on Vertex AI and Cloud Run adoption, delivering solution engineering and technical consulting.',
      'Designed production LLM deployments with autoscaling and caching, projecting 50% inference cost savings.',
      'Implemented CI/CD, debugging, and observability across GCP environments.'
    ]
  },
  {
    role: 'Backend Engineer Intern – AI',
    company: 'Viable Ideas Private Limited',
    period: 'Apr 2025 – Jun 2025',
    location: 'Bengaluru, India',
    bullets: [
      'Trained an LLM-based inventory prediction model on financial transaction data from four bank sources, achieving 85% classification accuracy in production.',
      'Implemented automated data pipelines for multi-source financial data, reducing manual workflows by 60% and operational costs by 40%.',
      'Built backend services and orchestration logic for scalable ML workflows.'
    ]
  },
  {
    role: 'Teaching Assistant — LLMs & Its Applications',
    company: 'PES University',
    period: 'Jan 2026 – Present',
    location: '6th-sem CS (AIML specialization)',
    bullets: [
      'Delivered lectures covering transformer mathematics, LLM internals, and advanced RAG pipelines.',
      'Graded technical assignments and verified end-of-term student projects.',
      'Supported students with core LLM concepts, walkthroughs, and applied coding exercises.'
    ]
  },
  {
    role: 'Teaching Assistant — Generative AI',
    company: 'PES University',
    period: 'Dec 2025 – Feb 2026',
    location: '6th-sem CS students',
    bullets: [
      'Helped students understand generative AI workflows and implementation details.',
      'Evaluated coursework focused on practical generative AI patterns.',
      'Verified student projects and provided feedback on AI engineering best practices.'
    ]
  }
]

export const projects = [
  {
    name: 'OriginScale',
    tag: 'Clustering Research',
    description:
      'A deterministic clustering algorithm that delivered a 45x speedup while maintaining a 100% success rate across 13 industry-standard benchmarks.',
    highlights: ['Algorithm design', 'Unsupervised learning', 'Deterministic initialization'],
    link: 'https://github.com/adityagirishh/OriginScale-a-novel-initialisation'
  },
  {
    name: 'FinFusion',
    tag: 'Multimodal Deep Learning',
    description:
      'A finance risk fusion model combining LSTM forecasting and sentiment analysis for stock prediction, achieving 9.78% MAPE and 68.9% directional precision.',
    highlights: ['Time-series forecasting', 'Sentiment fusion', 'Multimodal architecture'],
    link: 'https://github.com/adityagirishh/FinFusion-A-Finance-Risk-Fusion-Model'
  },
  {
    name: 'Vett',
    tag: 'AI startup validation',
    description:
      'An AI-powered platform for validating startup ideas, designed as a multi-tenant builder-first product.',
    highlights: ['Idea validation workflow', 'Product thinking', 'Builder-first experience'],
    link: ''
  },
  {
    name: 'Project Equilibrium',
    tag: 'Autonomous agents',
    description:
      'An autonomous multi-agent system for supply chain contracts, contributed to as an invited contributor in the Aden ecosystem.',
    highlights: ['Multi-agent coordination', 'Workflow automation', 'Supply-chain contracts'],
    link: 'https://github.com/adityagirishh/Equilibrium'
  },
  {
    name: 'QRAG (Quantized Bi-Level Retrieval Augmented Generation)',
    tag: 'Memory-optimized RAG',
    description:
      'A memory-efficient RAG system using dual-level quantization, achieving 3–4x memory reduction and 95.1% recall@10 on the FIQA dataset.',
    highlights: ['Quantized retrieval', 'Memory efficiency', 'RAG research'],
    link: 'https://github.com/adityagirishh/Quantized-RAG'
  },
  {
    name: 'LexiGen',
    tag: 'Legal AI platform',
    description:
      'An AI-powered legal automation platform that placed in the Top 10 of a Google hackathon and cut legal review time by 70%.',
    highlights: ['Legal workflow automation', 'Hackathon finalist', 'Cloud-native build'],
    link: 'https://github.com/adityagirishh/LexiGen-Firebase'
  }
]

export const publications = [
  {
    title: 'MSTRAE: Multi-Scale Temporal Recurrent Autoencoder for Flight Manoeuvre Recognition',
    venue: 'Future Technologies Conference (FTC) 2026',
    meta: 'Accepted for presentation and publication · Springer Lecture Notes in Networks and Systems · Web of Science / SCOPUS / INSPEC consideration',
    description:
      'A research work on flight manoeuvre recognition using a multi-scale LSTM autoencoder, HMM-based clustering, and an LLM-based evaluation framework for zero-shot recognition on telemetry data.'
  }
]

export const writing = [
    {
    title: 'Reverse Engineering the Refortif.ai Challenge',
    date: 'Mar 2026',
    link: 'https://medium.com/@adityadeepa634/reverse-engineering-the-refortif-ai-challenge-b34955379f7f'
  },
  {
    title: 'I Tried to Build an AI Agent That Turns Floor Plans Into 3D Renders. Here’s What Broke (Almost Everything).',
    date: 'Mar 2026',
    link: 'https://medium.com/@adityadeepa634/i-tried-to-build-an-ai-agent-that-turns-floor-plans-into-3d-renders-13d27ab8ed97'
  },
  {
    title: 'OriginScale: A Deterministic Initialization Strategy for Real-Time Clustering Systems',
    date: 'Mar 2026',
    link: 'https://medium.com/@adityadeepa634/originscale-a-deterministic-initialization-strategy-for-real-time-clustering-systems-36286862aaeb'
  },
  {
    title: 'Memory-Optimised QRAG: How I Built a RAG System That Compresses Embeddings by 5x',
    date: 'Mar 2026',
    link: 'https://medium.com/@adityadeepa634/memory-optimised-qrag-how-i-built-a-rag-system-that-compresses-embeddings-by-5x-without-destroying-3845f9e938e1'
  },
  {
    title: 'The Developer’s Guide to the WhatsApp Cloud API Sandbox (2026 Edition)',
    date: 'Jan 2026',
    link: 'https://medium.com/@adityadeepa634'
  }
]

export const academicHighlights = [
  'B.Tech. in Computer Science, PES University, Bengaluru (2022–2026).',
  'MRD Scholarship (Top 5%) and CNR Scholarship (Top 10%, two-time recipient).',
  'Grand Challenges Impact Lab foreign exchange with the University of Washington and BMS College of Engineering.'
]

export const openSource = [
  {
    project: 'Hive by Aden (YC W20)',
    role: 'Open-Source Contributor',
    description: 'Invited to contribute to an open-source development platform for generating self-evolving AI agents that run business processes autonomously.',
    link: 'https://github.com/adenhq/hive',
    logo: '/aden.png'
  },
  {
    project: 'Refortif AI (YC P26)',
    role: 'Featured Contributor / Challenger',
    description: 'Successfully reverse-engineered the Refortif AI Challenge. The solution and methodology were featured by Refortif AI (YC P26).',
    link: 'https://medium.com/@adityadeepa634/reverse-engineering-the-refortif-ai-challenge-b34955379f7f',
    logo: '/refortif.png'
  }
]

export const certifications = [
  {
    name: 'LLM Agents',
    issuer: 'UC Berkeley',
    code: 'CS 294',
    category: 'Certification Coursework'
  },
  {
    name: 'Machine Learning',
    issuer: 'Stanford University',
    code: 'CS 229',
    category: 'Certification Coursework'
  },
  {
    name: 'Financial Markets',
    issuer: 'Yale University',
    code: 'Coursera Certificate',
    category: 'Certification'
  },
  {
    name: 'Statistics 110x — Probability',
    issuer: 'Harvard University',
    code: 'Stats 110x',
    category: 'Certification Coursework'
  },
  {
    name: 'Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    code: 'QwikLabs Certification',
    category: 'Cloud Certification'
  },
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    code: 'In Progress',
    category: 'Cloud Certification'
  }
]