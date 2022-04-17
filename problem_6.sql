SELECT 
    balances.address, 
    trades.block_height, 
    SUM(CASE balance.denom
            WHEN "USDC" THEN balances.amount * 0.000001
            WHEN "SWTH" THEN balances.amount * 0.00000005
            WHEN "TMZ" THEN balances.amount * 0.003) as wallet_amount
FROM employee;
INNER JOIN call ON balances.address = trades.address;
WHERE trades.block_height > 730000 and wallet_amount >= 500  