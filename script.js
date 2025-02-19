// Show or hide the jurisdiction selection based on lab choice
function showFrameworkQuestion() {
  const framework = document.getElementById("framework").value;
  // Hide the jurisdiction section initially
  document.getElementById("region-selection").classList.add("hidden");
  // Show the jurisdiction section only when "Glam-E Lab" is selected
  if (framework === "glam-e-lab") {
    document.getElementById("region-selection").classList.remove("hidden");
  } else if (framework === "qm-emu") {
    document.getElementById("QM-EMu-selection").classList.remove("hidden");
  }
}

function handleQMQuestion() {
  const Answer = document.getElementById("artist").value;
  if (Answer === "yes") {
    showResult("Work is under copyright protection");
  } else if (Answer === "no") {
    document.getElementById("QM-artist-death-date").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");
  }
}

function handleQM_deathDateQuestion() {
  const Answer = document.getElementById("artist-death-date").value;
  if (Answer === "yes") {
    showResult("Work is in public domain");
  } else if (Answer === "no") {
    showResult("Work remains under copyright protection");
  }
}

// Show or hide sections based on jurisdiction selection
function handleRegionQuestion() {
  const region = document.getElementById("region").value;
  document.getElementById("questions-section").classList.remove("hidden");
  document.getElementById("us-questions").classList.add("hidden");
  document.getElementById("uk-eu-questions").classList.add("hidden");

  if (region === "us") {
    document.getElementById("us-questions").classList.remove("hidden");
  } else if (region === "uk-eu") {
    document.getElementById("uk-eu-questions").classList.remove("hidden");
  }
  document.getElementById("results").classList.add("hidden");
}

// Show further questions for the US framework based on responses
function handleUSQuestion() {
  const workEligible = document.getElementById("work-eligible").value;
  if (workEligible === "yes") {
    document.getElementById("us-yes-questions").classList.remove("hidden");
  } else {
    document.getElementById("us-yes-questions").classList.add("hidden");
    showResult("The work is in the public domain.");
  }
}

// Show questions based on work publication status
function handlePublicationQuestion() {
  const workPublished = document.getElementById("work-published").value;
  if (workPublished === "yes") {
    document
      .getElementById("work-published-questions")
      .classList.remove("hidden");
  } else {
    document.getElementById("work-published-questions").classList.add("hidden");
    showResult("Remove work for further review.");
  }
}

// Show date-related questions based on publication date range
function handleDateQuestion() {
  const publicationDate = document.getElementById("publication-date").value;
  // Check the publication date range and show appropriate results
  if (publicationDate === "before-1930") {
    alert("The work is in the public domain. Proceed to Checklist 2.");
    document.getElementById("checklist-2").classList.remove("hidden");
  } else if (publicationDate === "after-1978") {
    showResult(
      "The work is in-copyright and remove the work for further review."
    );
  } else if (publicationDate === "between-1928-1978") {
    document.getElementById("date-range-questions").classList.remove("hidden");
  }
}

// Show the final questions based on domestic or foreign work
function handleDomesticQuestion() {
  const domesticOrForeign = document.getElementById("us-domestic-or-foreign")
    .value;
  if (domesticOrForeign === "foreign") {
    showResult(
      "Refer to the copyright laws of the country of origin. Seek further advice if unsure"
    );
  } else if (domesticOrForeign === "domestic") {
    document.getElementById("domestic-questions").classList.remove("hidden");
  }
}

function handleRenewalQuestion() {
  const meetsRenewal = document.getElementById("meet_renewal").value;
  if (meetsRenewal === "yes") {
    showResult(
      "The work is under copyright. Remove the work for further review."
    );
  } else if (meetsRenewal === "no") {
    alert("The work is in the public domain. Proceed to Checklist 2.");
    document.getElementById("checklist-2").classList.remove("hidden");
  }
}

// Show UK & EU-related questions based on creator identification
function handleUKEUQuestion() {
  const creatorIdentified = document.getElementById("creator-identified").value;
  if (creatorIdentified === "yes") {
    document.getElementById("uk-eu-yes-questions").classList.remove("hidden");
  } else {
    document.getElementById("uk-eu-yes-questions").classList.add("hidden");
    showResult("Remove the work for further review");
  }
}

// Show questions based on the work's publication status in the UK/EU
function handleUKEUPublishedQuestion() {
  const workPublished = document.getElementById("work-published-uk-eu").value;
  if (workPublished === "yes") {
    document.getElementById("uk-eu-death-date").classList.remove("hidden");
  } else {
    document.getElementById("uk-eu-death-date").classList.add("hidden");
    showResult("Review Country Rules");
  }
}

// Check if the copyright has expired
function handleCheckExpirationQuestion() {
  const deathDate = document.getElementById("death-date").value;
  if (deathDate === "expired") {
    alert("The work is in the public domain. Proceed to checklist 2");
    document.getElementById("checklist-2").classList.remove("hidden");
  } else if (deathDate === "not-expired") {
    showResult(
      "The work is still under copyright. Remove work from open access program"
    );
  } else {
    document.getElementById("uk-eu-Foreign-work").classList.remove("hidden");
  }
}

function handleForeignWorkQuestion() {
  const RuleApplied = document.getElementById("short-term").value;
  if (RuleApplied === "yes") {
    alert("Apply shorter term for copyright expiration");
  } else if (RuleApplied === "no") {
    alert("Apply the country's original copyright term");
  }
  document
    .getElementById("uk-eu-copyright-expiration")
    .classList.remove("hidden");
}

function handleCopyrightExpirationQuestion() {
  const ExpiredCopyright = document.getElementById("copyright-expiration")
    .value;
  if (ExpiredCopyright === "yes") {
    alert("The work is in the public domain. Proceed to checklist 2");
    document.getElementById("checklist-2").classList.remove("hidden");
  } else if (ExpiredCopyright === "no") {
    showResult("Remove the work from open access program");
  }
}

function handleChecklist2Question() {
  const DigitalSurrogate = document.getElementById("digital-surrogate").value;
  if (DigitalSurrogate === "yes") {
    alert("The work is in public domain. Proceed to checklist 3");
    document.getElementById("checklist-3").classList.remove("hidden");
  } else if (DigitalSurrogate === "unsure") {
    document
      .getElementById("ch2-digitization-incorprate")
      .classList.remove("hidden");
  }
}

function handleIncorprateQuestion() {
  const Answer = document.getElementById("digitization-incorprate").value;
  if (Answer === "yes") {
    document.getElementById("ch2-digital-surrogate").classList.remove("hidden");
  } else if (Answer === "no") {
    alert("The work is in public domain. Proceed to checklist 3");
    document.getElementById("checklist-3").classList.remove("hidden");
  }
}

function handleCh2DigitalSurrogateQuestion() {
  const Answer = document.getElementById("ch2-surrogate").value;
  if (Answer === "organization") {
    alert(
      "Organization owns copyright - Can release CC0 - Proceed to Checklist 3"
    );
    document.getElementById("checklist-3").classList.remove("hidden");
  } else if (Answer === "contractor") {
    document.getElementById("ch2-rights").classList.remove("hidden");
  }
}

function handleCh2RightsQuestion() {
  const Answer = document.getElementById("rights").value;
  if (Answer === "organization") {
    alert(
      "Organization owns copyright - Can release CC0 - Proceed to Checklist 3"
    );
    document.getElementById("checklist-3").classList.remove("hidden");
  } else if (Answer === "contractor") {
    showResult("Seek professional advice or remove work for further review");
  }
}

function handleChecklist3Question() {
  const Answer = document.getElementById("meta-data").value;
  if (Answer === "basic") {
    showResult(
      "Work is not protected by copyright law, public domain - marked CC0"
    );
  } else if (Answer === "expressive") {
    document
      .getElementById("ch3-expressive-meta-data")
      .classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");
  }
}

function handleMetaDataQuestion() {
  const Answer = document.getElementById("expressive-meta-data").value;
  if (Answer === "organization") {
    showResult("Organization owns copyright - Marked CC0");
  } else if (Answer === "contractor") {
    showResult(
      "Remove excessive metadata - publish the record with basic metadata - Marked CC0"
    );
  }
}

// Display the final result
function showResult(resultText) {
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("result-text").innerText = resultText;
}

// Reset all fields and hide sections
function resetForm() {
  // Reset selections
  document.getElementById("framework").value = "";
  document.getElementById("region").value = "";
  document.getElementById("work-eligible").value = "";
  document.getElementById("work-published").value = "";
  document.getElementById("publication-date").value = "";
  document.getElementById("us-domestic-or-foreign").value = "";
  document.getElementById("creator-identified").value = "";
  document.getElementById("work-published-uk-eu").value = "";
  document.getElementById("death-date").value = "";
  document.getElementById("short-term").value = "";
  document.getElementById("copyright-expiration").value = "";
  document.getElementById("digital-surrogate").value = "";
  document.getElementById("digitization-incorprate").value = "";
  document.getElementById("rights").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("artist-death-date").value = "";

  // Hide all sections and results
  document.getElementById("questions-section").classList.add("hidden");
  document.getElementById("us-questions").classList.add("hidden");
  document.getElementById("uk-eu-questions").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("checklist-2").classList.add("hidden"); // Hide Checklist 2
  document
    .getElementById("ch2-digitization-incorprate")
    .classList.add("hidden");
  document.getElementById("ch2-digital-surrogate").classList.add("hidden");
  document.getElementById("ch2-rights").classList.add("hidden");
  document.getElementById("QM-EMu-selection").classList.add("hidden");
  document.getElementById("QM-artist-death-date").classList.add("hidden");
  document.getElementById("region-selection").classList.add("hidden");
}
