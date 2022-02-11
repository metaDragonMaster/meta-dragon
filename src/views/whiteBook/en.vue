<template>
	<div>
		<h1 class="white-book-title">《MetaDragon》白皮书</h1>
		<h3>1.MetaDragon</h3>
		<p>
			There is a magical world called "the Beginning".The young creator created the world with his most passionate imagination.Because this is the first world he created, he named it "the Beginning".After completing this work, the young god only left with satisfaction and allowed the world to develop freely.The world gathered all kinds of elements in the universe.After God left, the creatures slowly evolved under the nourishment of the essence of the universe. Finally, a creature of great strength and deep wisdom was born.They are dragons.The dragon is the spokesman of the creation God in the world, the guardian of the world and the follower of the steps of the creation God.They manage everything in the world and are always ready to follow the footsteps of the creator God and roam the world outside the world.
		</p>
		<h3>2.Where Can I Play</h3>
		<ul>
			<li>
				Personal computer:
				<ol>
					<li>Intel I3 GHz or higher.</li>
					<li>3GB Ram or greater.</li>
					<li>Windows 7 or later.</li>
				</ol>
			</li>
			<li>
				Mobile devices:
				<ol>
					<li>1.0 GHz processor.</li>
					<li>2GB Ram or greater.</li>
					<li>Android 7.0 or later.</li>
				</ol>
			</li>
		</ul>
		<h3>3.MetaDragon Characters</h3>
		<img src="@/assets/whiteBook/1.png" alt="" />
		<ul>
			<li>
				Dragons:
				<ol>
					<li>The NFT characters that can be played in the MetaDragon are called dragons.Its specific form is also dragon.</li>
				</ol>
			</li>
			<li>
				Role properties:
				<ol>
					<li>Attack：Dragon's attack can cause damage to the target. The higher the attack power, the higher the damage.</li>
					<li>Defense:Dragon defense can reduce the damage caused by the target. The higher the defense, the less damage the target will cause to itself.</li>
					<li>Health:Health represents whether the dragon can continue to fight. When health returns to zero, the dragon will be defeated and quit the battle.</li>
					<li>Mana:Dragons consume energy when using skills. This energy is called mana. When the mana value is less than the need to use skills, dragons will not be able to use skills.</li>
					<li>Qualifications:Qualification determines the upgrade and growth attribute of NFT dragon. The higher the qualification, the more bonus attributes.</li>
					<li>Speed:Speed determines the attack order of dragons and monsters. The higher the speed, the higher the attack order.</li>
					<li>Quality:The quality of NFT dragon determines the level of qualification. The higher the quality, the higher the qualification may be.</li>
				</ol>
			</li>
		</ul>
		<h3>4.PVE</h3>
		<img src="@/assets/whiteBook/2.png" />
		<p>PVE playing method is that players fight with AI controlled opponents with different difficulties while experiencing the story of the game.</p>
		<p>Team leader:</p>
		<p>When exploring, players must choose a character as the captain.</p>
		<p>Task:</p>
		<p>Each storyline has 250 tasks, and each task is unique. These missions are aimed at Ai enemies, so they can be completed in a period of time, and some missions require players to upgrade their dragons before entering.</p>
		<p>Rewards:</p>
		<p>When players defeat opponents or win battles in PvE mode, they will win game experience and LC. After completing several tasks, players will receive special rewards.</p>
		<h3>5.Daily tasks</h3>
		<img src="@/assets/whiteBook/3.png" alt="" />
		<p>Players gain 30 LCS by winning 15 PVES every day.</p>
		<h3>6.PVP</h3>
		<img src="@/assets/whiteBook/4.png" alt="" />
		<p>In player to player mode (PVP), players play against other players to earn LC. The system will automatically assign opponents according to player level and availability.</p>
		<p>Rewards:</p>
		<p>Players who win 10 PVP games a day can get lb, and lose the game without token penalty.</p>
		<p>
			PVP (territory battle) adopts the league competition system. Players can control their own dragons to challenge other players. Players can get points every time they beat their opponents. Your points will increase or decrease according to the battle results. We will reward you according to the player's points at the end of the season.
		</p>
		<p>Each time a player challenges, each dragon needs to consume 1 point of physical strength, and each dragon has 20 points of physical strength at the beginning.</p>
		<p>The season lasts for one week. During this period, players can view the ranking and points through the leaderboard. When players win in a row, the points will increase faster.</p>
		<h3>7.Stars</h3>
		<ul>
			<li>The quality of dragon ranges from sporadic to five-star, which is divided into six stars.</li>
			<li>There are two ways to improve the star level of the dragon, that is, raising the star and buying.</li>
		</ul>
		<h3>8.Rising star</h3>
		<ul>
			<li>Players consume two NFT dragons with the same star and consume a certain amount of LC to obtain an NFT dragon one star higher.</li>
			<li>The attributes of dragons with high stars are higher than those with low stars. They will have great advantages in battle.</li>
		</ul>
		<h3>9.Hatch</h3>
		<img src="@/assets/whiteBook/5.png" alt="" />
		<ul>
			<li>After having NFT dragon, you can hatch with LC token to produce new NFT dragon.</li>
			<li>Incubate new dragon games and complete on the official website.</li>
			<li>Players must have two dragons and hatch with LC tokens.</li>
			<li>The number of tokens required for hatching depends on the hatching number of your dragon, and the numbers are shown in the table below.</li>
		</ul>
		<table border="0" cellspacing="0">
			<tr>
				<th>Hatching quantity</th>
				<th>LC</th>
				<th>Incubation days</th>
			</tr>
			<tr v-for="item in tableData">
				<td class="font-hide">{{ item.num }}</td>
				<td class="font-hide">{{ item.lc }}</td>
				<td class="font-hide">{{ item.day }}</td>
			</tr>
		</table>
		<ul>
			<li>
				Hatch
				<ol>
					<li>The more times NFT dragons spawn, the higher the token cost of spawning.</li>
					<li>It can hatch up to seven times.</li>
				</ol>
			</li>
		</ul>
		<h3>10.Core combat play</h3>
		<ul>
			<li>Each battle must have 3 dragons to play.</li>
			<li>We have three dragons in each game, with a maximum of 20 points of physical strength.</li>
			<li>There will be a scoring system to evaluate your game performance.</li>
			<li>You have three dragons to play a game. If there is no dragon killed at the end of the battle, you can get a 3-star evaluation. The evaluation of each dragon killed will be reduced by 1 star.</li>
		</ul>
		<h3>11.Physical strength</h3>
		<ul>
			<li>Each dragon has 20 points of physical strength, and each team of three dragons has 60 points of physical strength.</li>
			<li>At the end of each game, the dragon will lose 1 point of physical strength.</li>
			<li>In PvE mode, only the captain dragon loses strength points.</li>
			<li>In PVP mode, all NFT dragons will reduce physical strength by 1 point.</li>
			<li>The dragon will recover 1 point of strength every two hours.</li>
			<li>Transferring the dragon to another player will retain the dragon's current physical strength.</li>
		</ul>
		<h3>12.Ranking List</h3>
		<ul>
			<li>The game leaderboard ranks the players in the game according to their achievements.</li>
			<li>Leaderboards help improve competitiveness among players and create exciting challenges. Encourage players to improve their skills and get recognition every week.</li>
			<li>
				How to rank:
				<ol>
					<li>After the PVP battle, the winner will get rank points, and the game will be ranked according to the player's rank points.</li>
					<li>The ranking is automatically reset.</li>
					<li>The player ranking will be reset at the beginning of the new season (a season lasts 7 days).</li>
				</ol>
			</li>
			<li>
				Ranking rewards:
				<ol>
					<li>At the end of the season, excellent players will be given LC tokens or other forms of season rewards according to the ranking.</li>
				</ol>
			</li>
		</ul>
		<h3>13.NFT in game</h3>
		<h3>What is NFT?</h3>
		<ul>
			<li>
				Irreplaceable tokens are the digital representation of assets, which can also represent physical objects through tokenization. For example, works of art or land leases. Assets that do not necessarily have tangible performance, such as avatars in virtual land or video games, are the perfect application of NFT, because no NFT is the same as another, that is, its quality is unique, exclusive and real, which is why digital token collections are commonly used as collectors' items.
			</li>
		</ul>
		<h3>What is NFT game?</h3>
		<ul>
			<li>NFT games are based on Collaborative economy and use blockchain technology to verify transactions. Most of them are decentralized, and all participants are stakeholders.</li>
			<li>Each game has created its own financial ecosystem, and all transaction and video game elements can be converted into real money.</li>
		</ul>
		<h3>Ideology behind NFT</h3>
		<ul>
			<li>
				This is the ideology behind NFT games, which is why they are so successful, because they have completely changed people's views or the way they play games, because people are used to paying for games and never get any return in the game. Traditional video games.
			</li>
		</ul>
		<h3>14.Income</h3>
		<ul>
			<li>NFT games are an option to help players create additional revenue, especially now that the industry is growing exponentially.</li>
			<li>Video games based on NFT blockchain have become a new choice for game players and citizens in countries such as Venezuela, Vietnam and the Philippines to make money. They turn to facing unemployment or insufficient economic development.</li>
		</ul>
		<h3>15.Application technology</h3>
		<ul>
			<li>We use money security smart chain (BSC) as the backbone of our game.</li>
			<li>What is coin security smart chain?</li>
			<li>Money security smart chain (BSC) can be described as a blockchain parallel to money security chain. The difference is that BSC has smart contract function and is compatible with Ethereum virtual machine (EVM). The goal here is to maintain the high throughput of the whole currency security chain while introducing smart contracts into its ecosystem.</li>
		</ul>
		<h3>Why BSC?</h3>
		<ul>
			<li>Currency security smart chain (BSC) is a high-throughput blockchain with smart contract enabled, and the transaction cost is as low as about US $0.15.</li>
			<li>Although BSC does provide fast and cheap transactions while maintaining a secure and scalable network, the network itself is highly centralized.</li>
			<li>In many ways, BSC is a higher performance but centralized version of Ethereum. BSC relies heavily on the Ethereum developer community.</li>
			<li>Summary highlights:</li>
			<li>Low handling fee, faster security, strong compatibility, high performance and cross chain defi mechanism.</li>
		</ul>
		<h3>16.Economic model</h3>
		<h3>Monetary system</h3>
		<p>Only one token will be produced in the game.</p>
		<p>LC：</p>
		<ul>
			<li>LC can be obtained from PVE, PVP and daily tasks.</li>
			<li>Incubation and upgrading require LC.</li>
			<li>LC has unlimited supply.</li>
			<li>Players can also buy LC from any exchange.</li>
		</ul>
		<h3>17.Income model</h3>
		<p>Market</p>
		<ul>
			<li>We have our own proprietary NFT market for users to buy and sell in-game assets represented by NFT.</li>
			<li>By using our own market, we can bypass intermediaries like opensea, which enables us to save users the fuel cost of casting new NFTs and exchanging NFTs with each other.</li>
		</ul>
		<p>Transaction costs</p>
		<ul>
			<li>Because we do not use intermediaries, all our users must use usdt or LB tokens to buy and sell NFT from our market.</li>
			<li>We charge 4.5% on a per transaction basis to facilitate the transaction.</li>
		</ul>
		<p>Why charge</p>
		<ul>
			<li>All NFTs after the game is released are generated by our users, which means that we will not generate revenue by creating and selling new game assets.</li>
			<li>Therefore, we need to charge transaction fees to permanently fund the operation cost and development of the game, including new features and support.</li>
		</ul>
		<p>Token holding</p>
		<ul>
			<li>We hold 8% of LB in the operating expenses fund. By holding 8% lb, we can use the appreciation value of tokens to further support game development and operation.</li>
		</ul>
		<p>Token allocation</p>
		<ul>
			<li>5% developer team maintenance.
				<ol>
					<li>The game development team updates and maintains games and technical support.</li>
				</ol>
			</li>
			<li>30% injection pool swap.</li>
			<li>10% community governance.</li>
			<li>35% game acquisition.</li>
			<li>20% consumption and destruction.</li>
		</ul>
	</div>
</template>
<script>

export default {
	props:{
		tableData:{
			type:Array,
			default:()=>[]
		}
	}
};
</script>