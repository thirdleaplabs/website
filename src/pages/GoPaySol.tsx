import { CheckCircle2, FileCheck2, Link2, QrCode, ReceiptText, WalletCards } from 'lucide-react';
import { ProductDetailPage } from '../components/ui/ProductDetailPage';
import { GoPaySolVisual } from '../components/ui/Visuals';

export const GoPaySol = () => (
  <ProductDetailPage
    seoTitle="GoPaySol | Third Leap Labs"
    seoDescription="GoPaySol is a non-custodial Solana payment workflow product from Third Leap Labs."
    path="/work/gopaysol"
    eyebrow="Third Leap Labs product · Web3 payments"
    title={<>Simple crypto payment requests, <span className="text-gradient">without taking custody.</span></>}
    description="GoPaySol helps businesses, creators and communities create Solana payment requests, share clear payment details, verify settlement on-chain and maintain a useful receipt trail."
    externalUrl="https://gopaysol.com"
    externalLabel="Visit GoPaySol"
    visual={<GoPaySolVisual />}
    storyEyebrow="The product idea"
    storyTitle="Make a blockchain payment feel like a clear business workflow."
    storyDescription="The payer should know exactly what to send. The receiver should be able to verify what arrived. GoPaySol connects the request, wallet approval, on-chain confirmation and receipt without holding user funds."
    problems={[
      'A copied wallet address does not clearly communicate the amount, asset, purpose or reference for a payment.',
      'Receivers often verify settlement manually through explorers, screenshots or messages from the payer.',
      'The original request and completed transaction are rarely connected in a readable business record.',
    ]}
    features={[
      {
        title: 'Payment requests',
        description: 'Create a clear request with the amount, asset, recipient and useful reference information.',
        icon: WalletCards,
      },
      {
        title: 'QR payment flow',
        description: 'Share payment details in a format that is easy to open from another device or compatible wallet.',
        icon: QrCode,
      },
      {
        title: 'On-chain verification',
        description: 'Confirm settlement from blockchain data instead of relying on screenshots or manual claims.',
        icon: CheckCircle2,
      },
      {
        title: 'Receipt records',
        description: 'Keep a readable record connecting the original payment request to the completed transaction.',
        icon: ReceiptText,
      },
      {
        title: 'Non-custodial by design',
        description: 'The workflow does not require Third Leap Labs to hold funds or request private wallet credentials.',
        icon: FileCheck2,
      },
      {
        title: 'Integration-ready',
        description: 'Connect payment creation and verification to broader business, creator or community workflows.',
        icon: Link2,
      },
    ]}
  />
);
