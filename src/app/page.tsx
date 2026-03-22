'use client';

import { useState } from 'react';

interface Attack {
  id: string;
  type: 'sandwich' | 'frontrun' | 'backrun' | 'liquida
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

tion';
  victimTx: string;
  attackerProfit: number;
  victimLoss: number;
  blocked: boolean;
  timestamp: string;
}

interface ProtectionStats {
  totalBlocked: number;
  totalSaved: string;
  avgSavings: string;
  protectionRate: number;
}

const attacks: Attack[] = [
  {
    id: 'ATK-001',
    type: 'sandwich',
    victimTx: '0x7a...9f2e',
    attackerProfit: 450,
    victimLoss: 520,
    blocked: true,
    timestamp: '2 min ago',
  },
  {
    id: 'ATK-002',
    type: 'frontrun',
    victimTx: '0x3c...1d4a',
    attackerProfit: 180,
    victimLoss: 200,
    blocked: true,
    timestamp: '5 min ago',
  },
  {
    id: 'ATK-003',
    type: 'backrun',
    victimTx: '0x5f...7a8b',
    attackerProfit: 85,
    victimLoss: 90,
    blocked: false,
    timestamp: '8 min ago',
  },
  {
    id: 'ATK-004',
    type: 'liquidation',
    victimTx: '0x2a...9c1d',
    attackerProfit: 1200,
    victimLoss: 1350,
    blocked: true,
    timestamp: '12 min ago',
  },
];

const protectionStats: ProtectionStats = {
  totalBlocked: 12450,
  totalSaved: '$8.2M',
  avgSavings: '$658',
  protectionRate: 94.5,
};

export default function Home() {
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null);
  const [isProtecting, setIsProtecting] = useState(false);

  const enableProtection = async () => {
    setIsProtecting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsProtecting(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-red-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">MEV Shield</h1>
          <p className="text-gray-400 mt-2">Private mempool protection against sandwich attacks & frontrunning</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-red-400 p-4 text-center">
            <div className="text-3xl font-black text-red-400">12,450</div>
            <div className="text-sm text-gray-400">Attacks Blocked</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">{protectionStats.totalSaved}</div>
            <div className="text-sm text-gray-400">User Funds Saved</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">{protectionStats.avgSavings}</div>
            <div className="text-sm text-gray-400">Avg Savings/TX</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">{protectionStats.protectionRate}%</div>
            <div className="text-sm text-gray-400">Protection Rate</div>
          </div>
        </section>

        {/* Enable Protection Button */}
        <button
          onClick={enableProtection}
          disabled={isProtecting}
          className="w-full py-4 bg-red-500 text-white font-bold border-4 border-red-400 hover:bg-red-400 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
        >
          {isProtecting ? 'Routing to Private Mempool...' : 'Enable MEV Protection'}
        </button>

        {/* Attack Feed */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Recent Attack Attempts</h2>
          <div className="space-y-4">
            {attacks.map((attack) => (
              <div
                key={attack.id}
                onClick={() => setSelectedAttack(attack)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedAttack?.id === attack.id
                    ? 'bg-red-900/30 border-red-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs text-gray-400">{attack.id}</span>
                    <h3 className="font-bold text-red-400">{attack.type.toUpperCase()} Attack</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs font-bold ${
                      attack.blocked
                        ? 'bg-green-900 text-green-400'
                        : 'bg-red-900 text-red-400'
                    }`}>
                      {attack.blocked ? 'BLOCKED' : 'EXECUTED'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-400">
                  <div>
                    <div className="text-gray-500">Victim TX</div>
                    <div className="font-mono text-white">{attack.victimTx}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Attacker Profit</div>
                    <div className="font-bold text-red-400">${attack.attackerProfit}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Victim Loss</div>
                    <div className="font-bold text-yellow-400">${attack.victimLoss}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Time</div>
                    <div className="font-bold">{attack.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Attack */}
        {selectedAttack && (
          <section className="bg-gray-900 border-4 border-red-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-red-400">{selectedAttack.type.toUpperCase()} Attack</h2>
                <p className="text-sm text-gray-400">{selectedAttack.id}</p>
              </div>
              <button
                onClick={() => setSelectedAttack(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Attack Explanation</div>
                <p className="text-white">
                  {selectedAttack.type === 'sandwich' && 'Attacker places buy before and sell after victim swap to profit from price impact.'}
                  {selectedAttack.type === 'frontrun' && 'Attacker copies victim transaction with higher gas to execute first.'}
                  {selectedAttack.type === 'backrun' && 'Attacker places transaction immediately after victim to capture arbitrage.'}
                  {selectedAttack.type === 'liquidation' && 'Attacker triggers liquidation by manipulating oracle prices.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Attacker Profit</div>
                  <div className="font-bold text-xl text-red-400">${selectedAttack.attackerProfit}</div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Victim Loss</div>
                  <div className="font-bold text-xl text-yellow-400">${selectedAttack.victimLoss}</div>
                </div>
              </div>
              <div className={`p-3 text-center ${
                selectedAttack.blocked
                  ? 'bg-green-900/30 border border-green-500'
                  : 'bg-red-900/30 border border-red-500'
              }`}>
                {selectedAttack.blocked
                  ? '✅ This attack was BLOCKED by MEV Shield'
                  : '❌ This attack was NOT protected'}
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How MEV Protection Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-red-400 mb-2">Private Relay</h3>
              <p className="text-xs text-gray-400">TX sent to private mempool, not public</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Hidden from Bots</h3>
              <p className="text-xs text-gray-400">Searchers cant see your transaction</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Direct Inclusion</h3>
              <p className="text-xs text-gray-400">Block builder includes TX directly</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">No Sandwich</h3>
              <p className="text-xs text-gray-400">Attackers cant sandwich your swap</p>
            </div>
          </div>
        </section>

        {/* Attack Types */}
        <section className="bg-gray-900 border-4 border-yellow-400 p-6">
          <h2 className="text-xl font-black text-yellow-400 mb-4">Attack Types We Block</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🥪</div>
              <h3 className="font-bold text-red-400 mb-2">Sandwich Attacks</h3>
              <p className="text-sm text-gray-400">Buy before, sell after your swap to profit from price impact</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🏃</div>
              <h3 className="font-bold text-orange-400 mb-2">Frontrunning</h3>
              <p className="text-sm text-gray-400">Copy your TX with higher gas to execute first</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🔙</div>
              <h3 className="font-bold text-blue-400 mb-2">Backrunning</h3>
              <p className="text-sm text-gray-400">Execute immediately after to capture arbitrage</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">💧</div>
              <h3 className="font-bold text-purple-400 mb-2">Liquidations</h3>
              <p className="text-sm text-gray-400">Manipulate prices to trigger forced liquidations</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-red-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
