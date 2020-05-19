import streamlit as st
import hiplot as hip
import time


def max_width():
    max_width_str = f"max-width: 2000px;"
    st.markdown(
        f"""
    <style>
    .reportview-container .main .block-container{{
        {max_width_str}
    }}
    </style>
    """,
        unsafe_allow_html=True,
    )

def intro():
    t = st.empty()
    text = "HiPlot is a lightweight interactive visualization tool to help AI researchers discover correlations and patterns in high-dimensional data using parallel plots"

    emojis = [":chart:", ":bar_chart:", ":chart_with_upwards_trend:"]

    for i in range(len(list(text)) + 1):
        t.markdown("## %s..." % text[0:i])
        time.sleep(0.02)

    for i in emojis:
      time.sleep(1)
      t.markdown("## %s %s" % (text, i))
    time.sleep(2)

# Setup component
HiPlotComponent = st.declare_component(url="http://localhost:3001")
st.register_component("hiplot", HiPlotComponent)

# Load data
h = hip.Experiment.from_csv("hiplot-selected-6968.csv")

# Liftoff
if st.button("HiPlot"):
    intro()
    max_width()
    output = st.hiplot(html=h.to_html())
