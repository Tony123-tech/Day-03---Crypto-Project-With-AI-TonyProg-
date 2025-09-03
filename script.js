// Smooth scroll to section
function scrollToSection(id) {
const el = document.getElementById(id);
if (el) {
el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
}

// Modal logic
function openModal(type) {
document.getElementById("modalBg").classList.remove("hidden");
let html = "";
if (type === "tokenBuilder") {
html = `
<h3 class="text-2xl font-orbitron cyberpunk-glow mb-2">No-Code Token Builder (Demo)</h3>
<p class="mb-4 text-md text-[#b2b2ff]">Quickly tokenize your asset in a few clicks:</p>
<form onsubmit="event.preventDefault(); alert('Tokenization simulated!'); closeModal();" class="flex flex-col gap-3">
<input class="rounded-lg px-4 py-2 bg-[#23234b] border border-[#a100ff] text-[#e0e0e0]" placeholder="Asset Name (e.g. Luxury Villa)" required>
<input class="rounded-lg px-4 py-2 bg-[#23234b] border border-[#a100ff] text-[#e0e0e0]" placeholder="Fractional Shares (e.g. 1000)" type="number" required>
<input class="rounded-lg px-4 py-2 bg-[#23234b] border border-[#a100ff] text-[#e0e0e0]" placeholder="Estimated Value (USD)" type="number" required>
<button class="neon-btn mt-2" type="submit">Tokenize Asset</button>
</form>
`;
} else if (type === "defiDemo") {
html = `
<h3 class="text-2xl font-orbitron cyberpunk-glow mb-2">Cross-Chain DeFi Dashboard (Demo)</h3>
<p class="mb-4 text-md text-[#b2b2ff]">Manage your assets seamlessly across blockchains:</p>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<span>Staked BTC</span>
<span class="font-bold text-[#00fff7]">1.35 BTC</span>
</div>
<div class="flex justify-between items-center">
<span>Yield Earned (APY)</span>
<span class="font-bold text-[#a100ff]">8.2%</span>
</div>
<div class="flex justify-between items-center">
<span>Lent ETH</span>
<span class="font-bold text-[#00fff7]">12 ETH</span>
</div>
<button class="neon-btn mt-4" onclick="alert('Demo action simulated!')">Add Liquidity</button>
</div>
`;
} else if (type === "nodeInfo") {
html = `
<h3 class="text-2xl font-orbitron cyberpunk-glow mb-2">Entry-Point Node Rewards</h3>
<p class="mb-4 text-md text-[#b2b2ff]">Run a node & earn:</p>
<ul class="list-disc pl-6 mb-4">
<li>Earn transaction fees based on reputation</li>
<li>Optional KYC with ZKProofs for compliance</li>
<li>Privacy-respecting participation</li>
</ul>
<button class="neon-btn" onclick="alert('Node info simulated!')">Start Node (Demo)</button>
`;
} else if (type === "nftMint") {
html = `
<h3 class="text-2xl font-orbitron cyberpunk-glow mb-2">Mint Your AI NFT</h3>
<p class="mb-4 text-md text-[#b2b2ff]">Create a generative NFT with AI:</p>
<form onsubmit="event.preventDefault(); alert('AI NFT minted (demo)!'); closeModal();" class="flex flex-col gap-3">
<input class="rounded-lg px-4 py-2 bg-[#23234b] border border-[#a100ff] text-[#e0e0e0]" placeholder="NFT Name" required>
<select class="rounded-lg px-4 py-2 bg-[#23234b] border border-[#a100ff] text-[#e0e0e0]" required>
<option value="">Type: Choose</option>
<option value="Avatar">Avatar</option>
<option value="Music">Music</option>
<option value="Art">Art</option>
</select>
<button class="neon-btn mt-2" type="submit">Mint NFT</button>
</form>
`;
} else if (type === "marketplaceDemo") {
html = `
<h3 class="text-2xl font-orbitron cyberpunk-glow mb-2">Freelance Marketplace (Demo)</h3>
<p class="mb-4 text-md text-[#b2b2ff]">Find jobs or hire talent globally:</p>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<span>UI/UX Designer</span>
<span class="font-bold text-[#00fff7]">0.2 ETH</span>
</div>
<div class="flex justify-between items-center">
<span>Smart Contract Auditor</span>
<span class="font-bold text-[#a100ff]">1.5 ETH</span>
</div>
<div class="flex justify-between items-center">
<span>AI Model Trainer</span>
<span class="font-bold text-[#00fff7]">2.1 ETH</span>
</div>
<button class="neon-btn mt-4" onclick="alert('Job application simulated!')">Apply for Job</button>
</div>
`;
}
document.getElementById("modalInner").innerHTML = html;
}
function closeModal() {
document.getElementById("modalBg").classList.add("hidden");
document.getElementById("modalInner").innerHTML = "";
}

// Animations
document.querySelectorAll('.animate-fadeIn').forEach(function(el, i){
setTimeout(() => {
el.style.opacity = 1;
el.style.transform = 'scale(1)';
}, 500 + i*150);
el.style.opacity = 0.7;
el.style.transform = 'scale(0.97)';
el.style.transition = 'opacity 0.8s, transform 0.8s';
});
