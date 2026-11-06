from pathlib import Path
p=Path('src/expansion/build.py');s=p.read_text();needle='html=head+ui+helpers+data+'
s=s.replace(needle,"renderer=renderer.replace(\"asset('splash','game-asset://meadow_water_burst');\",'')\nlate=late.replace(\"asset('chakra','game-asset://exp_chakra_burst');\",'')\n"+needle);p.write_text(s)
p=Path('src/expansion/batch1.js');s=p.read_text().replace(" asset('reward','game-asset://batch1_reward_burst');",'');p.write_text(s)
