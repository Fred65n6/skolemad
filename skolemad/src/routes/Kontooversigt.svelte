<table>
	<tr>
		<th>Barn</th>
		<th>Løbende periode</th>
		<th>Menu</th>
		<th>Pris</th>
	</tr>
	<tr>
		<td>Felix Grage</td>
		<td>Februrar</td>
		<td>Vegetar</td>
		<td>348,-</td>
	</tr>
	<tr>
		<td>Mikka Grage</td>
		<td>Hver måned</td>
		<td>Almindelig</td>
		<td>348,- mdl.</td>
	</tr>
</table>

<style>
	table {
		margin: 3rem;
		width: 85%;
		text-align: center;
	}
	th {
		background-color: #ddebed;
		padding: 2rem;
		margin: 2rem;
		gap: 20px;
	}

	td {
		background-color: #ededed;
		padding: 2rem;
		border-top: solid 2px #ddebed;
		border-right: solid 2px #ddebed;
	}

	/* top-left border-radius */
	table tr:first-child th:first-child {
		border-top-left-radius: 12px;
	}

	/* top-right border-radius */
	table tr:first-child th:last-child {
		border-top-right-radius: 12px;
	}

	/* bottom-left border-radius */
	table tr:last-child td:first-child {
		border-bottom-left-radius: 12px;
	}

	/* bottom-right border-radius */
	table tr:last-child td:last-child {
		border-bottom-right-radius: 12px;
	}

	td:last-child {
		border-right: none;
	}
</style>
