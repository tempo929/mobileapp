<button onclick="random()">GENERATE</button>

<p id="text"></p>

<script>
var canids = ["dog", "wolf", "coyote", "jackal", "fox", "wild dog", "raccoon dog", "dire wolf", "dingo"]
function random() {
var canids_index1 = (Math.random() * canids.length) | 0
var canids_index2 = (Math.random() * canids.length) | 0
while(canids_index1 === canids_index2) canids_index2 = (Math.random() * canids.length) | 0
var canids1 = canids[canids_index1]
var canids2 = canids[canids_index2] /*i want it to be impossible for this to be the same as canids1*/

document.getElementById('text').innerHTML = canids1 + " " + canids2;
}
</script>