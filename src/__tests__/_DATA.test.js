import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  test("returns the saved question with all expected fields populated when correctly formatted data is passed to the function", async () => {
    const mockQuestion = {
      author: "name of author",
      optionOneText: "option one",
      optionTwoText: "option two",
    };

    const actual = await _saveQuestion(mockQuestion);
    const { author, optionOne, optionTwo } = actual;
    const text1 = optionOne.text;
    const text2 = optionTwo.text;

    expect(author).toBe("name of author");
    expect(text1).toBe("option one");
    expect(text2).toBe("option two");
  });
});

describe("_saveQuestion", () => {
  test("returns an error when incorrect data is passed to the function", async () => {
    const mockQuestion = {
      author: null,
      optionOneText: null,
      optionTwoText: null,
    };

    await expect(_saveQuestion(mockQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  test("returns the saved answer with all expected fields populated when correctly formatted data is passed to the function", async () => {
    const mockAnswer = {
      authedUser: "lisasimpson",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const { users, questions } = await _saveQuestionAnswer(mockAnswer);

    expect(
      users[mockAnswer.authedUser].answers[mockAnswer.qid] === mockAnswer.answer
    ).toBe(true);

    expect(
      questions[mockAnswer.qid][mockAnswer.answer].votes.includes(
        mockAnswer.authedUser
      )
    ).toBe(true);
  });
});

describe("_saveQuestionAnswer", () => {
  test("returns an error when incorrect data is passed to the function", async () => {
    const mockAnswer = {
      authedUser: null,
      qid: null,
      answer: null,
    };

    await expect(_saveQuestionAnswer(mockAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
