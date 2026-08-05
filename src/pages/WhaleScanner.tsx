import { Activity, BellRing, Search, ShieldCheck, UsersRound, WalletCards } from 'lucide-react';
import { ProductDetailPage } from '../components/ui/ProductDetailPage';
import { WhaleScannerVisual } from '../components/ui/Visuals';

export const WhaleScanner = () => (
  <ProductDetailPage
    seoTitle="WhaleScanner | Third Leap Labs"
    seoDescription="WhaleScanner is a Web3 intelligence and community platform from Third Leap Labs."
    path="/work/whalescanner"
    eyebrow="Third Leap Labs product · Web3"
    title={<>Crypto intelligence, without making the user <span className="text-gradient">assemble the story alone.</span></>}
    description="WhaleScanner connects wallet activity, market context, project discovery, risk awareness, signals and community participation in one product."
    externalUrl="https://whalescanner.com"
    externalLabel="Visit WhaleScanner"
    visual={<WhaleScannerVisual />}
    storyEyebrow="The product idea"
    storyTitle="Move from isolated data points to useful context."
    storyDescription="Crypto users often jump between explorers, market dashboards, social feeds and private groups. WhaleScanner is designed to connect those signals while keeping uncertainty and risk visible."
    problems={[
      'Wallet movements are visible on-chain, but the meaning and broader market context are often difficult to understand.',
      'Project information, technical signals, safety context and community discussion are scattered across disconnected products.',
      'Users receive too much noise and too little explanation about why an event may matter.',
    ]}
    features={[
      {
        title: 'Wallet intelligence',
        description: 'Understand wallet activity and behavioural patterns without reading raw transaction histories all day.',
        icon: WalletCards,
      },
      {
        title: 'Market signals',
        description: 'Turn technical and market data into structured signals with context, confidence and supporting evidence.',
        icon: Activity,
      },
      {
        title: 'Project discovery',
        description: 'Explore crypto projects through richer profiles, official updates and community information.',
        icon: Search,
      },
      {
        title: 'Risk awareness',
        description: 'Surface suspicious patterns and safety information without pretending that uncertainty has disappeared.',
        icon: ShieldCheck,
      },
      {
        title: 'Community layer',
        description: 'Bring builders, users, verified projects and relevant activity into the same product experience.',
        icon: UsersRound,
      },
      {
        title: 'Useful alerts',
        description: 'Notify users when something meaningful changes instead of treating every data movement as important.',
        icon: BellRing,
      },
    ]}
  />
);
