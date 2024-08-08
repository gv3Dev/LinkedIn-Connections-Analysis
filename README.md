# LinkedIn Connections Analysis 🧬

**Description**:

This project is all about understanding LinkedIn connections and predicting who might connect with you in the future. I started by gathering data from LinkedIn profiles, and now I'm moving on to the next steps of analyzing this data and predicting future connection behaviors.

## Current Progress <img src="https://cdn.pixabay.com/animation/2022/12/27/19/44/19-44-01-183_512.gif" width="30px"/>

### Part 1: Data Scraping

The first part of the project is done. I’ve built a scraper that collects LinkedIn connection data and saves it as a CSV file for later analysis. I’ve also set up a way to get the specific user’s profile data as a JSON file. Feel free to check it out. 🤞


<img src="https://github.com/gv3Dev/LinkedIn-Connections-Analysis/blob/main/scraper.png?raw=true" width="48%" /> <img src="https://github.com/gv3Dev/LinkedIn-Connections-Analysis/blob/main/userExtraction.png?raw=true" width="48%"/>

## Next Steps

### 1. Data Training

The next step is to train the data. This includes:

- **Preparing the Data**: Cleaning and organizing the data I collected to make sure it's ready for analysis.
- **Creating Features**: Identifying important factors from the data that might influence whether someone will connect with you.
- **Training Models**: Using machine learning to create models that predict how likely new users are to connect with you.

### Technologies Used

- **TamperMonkey**: A browser extension used to inject & execute JS scripts on websites.
- **Javascript**: Language used to write userscripts for both scraping / displaying predictions on LinkedIn.
- **Python**: The primary programming language for data analysis and model training.
- **Pandas**: For data manipulation and cleaning.
- **Scikit-Learn**: For implementing machine learning models and evaluating their performance.
- **Jupyter Notebooks**: For interactive development and visualization of data and model results.
- **NumPy**: For numerical operations and handling arrays.
- **Matplotlib / Seaborn**: For data visualization and understanding patterns in the data.

### 2. Predictive Analysis

After training the data, I will:

- **Score Future Connections**: Develop a script to give a percentage score to new connection requests and recommended users, showing how likely they are to connect with you.
- **Continuous Improvement**: Make sure the models keep learning and improving as I gather more data.

## Hypothesis

The main idea behind this project is:

**“By analyzing LinkedIn connection patterns, I can find out if connection decisions are random or based on specific factors. I want to see if there are any patterns or correlations between profile details and connection rates.”**

### Why This Project?

I started this project because I often notice that people view my LinkedIn profile but don’t connect with me although sometimes I have sent a connection request. This makes me look like I’m some type of “fan” or something 💀. On the other hand, some people do connect back or even start the connection themselves. ( could be random spam, or genuine interest 🤯 )

This project aims to answer questions like:

- **Are there patterns in who decides to connect and who does not?**
- **Is there a connection between my profile details and the chances of getting new connections?**
- **Can I predict connection behavior based on past data and profile features?**

By exploring these questions, I hope to understand LinkedIn networking better and find ways to increase meaningful connections.

## Future Enhancements

In the future, I plan to:

- **Improve Models**: Use more advanced algorithms to make better predictions.
- **Add More Data**: Continuously update the data to keep improving the models.
- **Develop a User Interface**: Create an easy-to-use interface to view connection predictions and results.

## Getting Started

1. **Set Up**: Follow the instructions to prepare your environment.
2. **Run the Scraper**: Use the scripts to collect LinkedIn connection data.
3. **Train the Model**: Process the data and train predictive models using the technologies mentioned.
4. **Analyze Results**: Check out the connection scores and insights.

**Note**: Make sure to follow LinkedIn’s terms of service and privacy policies when using scraping tools.

---

*Quick Note*: This README was crafted with a bit of help from ChatGPT. It’s been proofread to make sure it captures everything I meant to say. Just a heads-up, I’m here to code, not write essays, so if it’s a bit off, that’s why! 😄
